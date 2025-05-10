# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```






# CimoChat
CimoChat is a real-time chat application built using [CometChat SDK], allowing users to send and receive messages instantly. This project demonstrates my ability to integrate third-party chat APIs into a frontend or full-stack app.



## Features
- User login/signup
- Real-time messaging
- User presence (online/offline)
- Group and private chat support



## Tech Stack
- React.js (or your frontend framework)
- CometChat SDK


## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/anasali79/cimochat
   cd cimochat

npm install

npm run dev




## Challenges Faced
- **Authentication delay**: Initially had issues syncing user auth state with CometChat. Resolved by using CometChat's `onAuthStateChanged`.
- **Real-time message lag**: Fixed by properly initializing listeners in `componentDidMount`.
  
## Email in cometchat.com
work.anas79+test@gmail.com


## Author
- **Anas Ali**
- | [Email](mailto:work.anas79@gmail.com)

  



