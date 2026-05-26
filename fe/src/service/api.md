# FE x BE Contract

Dokumentasi struktur database dan kontrak response endpoint yang digunakan pada frontend.

---

# Database Structure

## Tabel: game

Digunakan untuk menyimpan informasi utama setiap game.

| Field          | Type           |
| -------------- | -------------- |
| id             | number         |
| title          | string         |
| slug           | string         |
| description    | text           |
| image_url      | string \| null |
| publisher      | string         |
| review_summary | text           |

Relasi:

- game → rating (M : 1)
- game → content_classification (M : M)
- game → game_gallery (1 : M)

---

## Tabel: game_gallery

Digunakan untuk menyimpan beberapa gambar tambahan dari suatu game.

| Field     | Type   |
| --------- | ------ |
| id        | number |
| image_url | string |

Relasi:

- game_gallery → game (M : 1)

---

## Tabel: rating

Digunakan untuk menyimpan klasifikasi usia game.

| Field       | Type           |
| ----------- | -------------- |
| id          | number         |
| title       | string         |
| summary     | string         |
| description | text           |
| image_url   | string \| null |

Relasi:

- rating → game (1 : M)

---

## Tabel: content_classification

Digunakan untuk menyimpan kategori konten pada game.

Contoh:

- Horor
- Kekerasan
- Bahasa Kasar
- Interaksi Daring
- Perjudian

| Field        | Type   |
| ------------ | ------ |
| id           | number |
| title        | string |
| description  | string |
| content_icon | string |

Relasi:

- content_classification → game (M : M)

---

## Tabel: blog

Digunakan untuk menyimpan artikel atau informasi terbaru.

| Field       | Type              |
| ----------- | ----------------- |
| id          | number            |
| title       | string            |
| description | string            |
| image_url   | string \| null    |
| date        | date (YYYY-MM-DD) |

---

# Response Endpoint

## GET /rating

Response:

```json
[
  {
    "id": 1,
    "title": "3+",
    "image_url": null,
    "summary": "string",
    "count": 134
  }
]
```

Field:

| Field                                       | Type           |
| ------------------------------------------- | -------------- |
| id                                          | number         |
| title                                       | string         |
| image_url                                   | string \| null |
| summary                                     | string         |
| count (total game memiliki rating tersebut) | number         |

---

## GET /rating/id

Response:

```json
{
  "id": 1,
  "title": "3+",
  "image_url": null,
  "description": "string"
}
```

Field:

| Field       | Type           |
| ----------- | -------------- |
| id          | number         |
| title       | string         |
| image_url   | string \| null |
| description | string         |

---

## GET /content-classification

Response:

```json
[
  {
    "id": 1,
    "title": "Horor",
    "content_icon": "Horor", # Sesuaikan di contentClassificationIcons
    "description": "string"
  }
]
```

Field:

| Field        | Type   |
| ------------ | ------ |
| id           | number |
| title        | string |
| content_icon | string |
| description  | string |

---

## GET /game

Response:

```json
[
  {
    "id": 1,
    "title": "Subway Surfers",
    "image_url": null,
    "rating": {
      "id": 1,
      "image_url": null
    }
  }
]
```

Field:

| Field     | Type           |
| --------- | -------------- |
| id        | number         |
| title     | string         |
| image_url | string \| null |
| rating    | object         |

Rating Object:

| Field     | Type           |
| --------- | -------------- |
| id        | number         |
| image_url | string \| null |

---

## GET /game/{slug}

Response:

```json
{
  "id": 1,
  "title": "Subway Surfers",
  "slug": "subway-surfers",
  "image_url": null,
  "publisher": "string",
  "description": "string",
  "review_summary": "string",
  "rating": {
    "id": 1,
    "image_url": null
  },
  "content_classification": [
    {
      "id": 2,
      "content_icon": "InteraksiDaring"
    }
  ],
  "game_gallery": [
    {
      "id": 1,
      "image_url": null
    }
  ]
}
```

Field:

| Field                  | Type           |
| ---------------------- | -------------- |
| id                     | number         |
| title                  | string         |
| slug                   | string         |
| image_url              | string \| null |
| publisher              | string         |
| description            | string         |
| review_summary         | string         |
| rating                 | object         |
| content_classification | array \| null  |
| game_gallery           | array          |

Content Classification Object:

| Field        | Type   |
| ------------ | ------ |
| id           | number |
| content_icon | string |

Game Gallery Object:

| Field     | Type           |
| --------- | -------------- |
| id        | number         |
| image_url | string \| null |

---

## GET /blog

Response:

```json
[
  {
    "id": 1,
    "title": "string",
    "description": "string",
    "image_url": null,
    "date": "2026-05-15"
  }
]
```

Field:

| Field       | Type                |
| ----------- | ------------------- |
| id          | number              |
| title       | string              |
| description | string              |
| image_url   | string \| null      |
| date        | string (YYYY-MM-DD) |

---

## Notes

- `image_url` dapat bernilai `null` dan akan menggunakan fallback image di frontend.
- `content_classification` dapat bernilai `null` jika game tidak memiliki klasifikasi tambahan.
- Untuk endpoint detail (`/rating/{id}` dan `/game/{slug}`), backend mengembalikan **single object**, bukan array.
- Data dummy frontend saat ini menggunakan array untuk mempermudah simulasi dan pencarian data.
- gunakan data di `../mock/data.js` untuk value dari tiap tabel
- gunakan data di `fe\src\mock\constants.js` untuk value dari content_icon dan image_url