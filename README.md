# igrs-redesign

be/src/
    ├── config/
    │   └── db.ts          (Instance Prisma client)
    ├── controllers/
    │   └── gameController.ts
    ├── routes/
    │   └── gameRoutes.ts
    └── index.ts           (Entry point Express)

 fe/src/
    ├── components/
    │   ├── GameList.tsx
    │   └── GameDetail.tsx
    ├── hooks/
    │   └── useGames.ts
    └── App.tsx            (Main React App)