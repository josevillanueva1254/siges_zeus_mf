Estoy creando mi proyecto que se llama Zeus: Sistema de Gestión. 
Proyecto Implementara el Front con una arquitectura de Microfront y utiliaremos Vite + React + TS + Antd. El proyecto es generado con Vite.
Ahorita nos estamos enfocando netamente en el UI y ya tenemos una estructura definida.
Ya hemos creado el Microfront que sera el Header y ahora estamos creando el microfront que sera el Menu Principal que mostrara todos los modulos y opciones de Zeus.
Esta es la estructura de Mi  microfront que tengo actualmente:

Comando para crear proyecto Vite: npm create vite siges_zeus_body

siges_zeus_body/
├── public/                    # Archivos estáticos públicos
├── src/
│   ├── shared/                # Recursos compartidos
│   │   ├── i18n/              # Manejo de internacionalización
│   │   │   ├── config.ts      # Configuración de i18n
│   │   │   ├── index.ts       # Inicialización de i18n
│   │   │   ├── locales/       # Traducciones globales
│   │   │   │   ├── en/common.json
│   │   │   │   └── es/common.json
│   ├── modules/               # Módulos funcionales
│   │   ├── menu/            # Módulo Menu
│   │   │   ├── components/    # Componentes específicos del Menu
│   │   │   │   └── Menu.tsx
│   │   │   ├── locales/       # Traducciones específicas del Menu
│   │   │   │   ├── en.json
│   │   │   │   └── es.json
│   │   │   └── index.ts       # Exportaciones del Menu
│   ├── assets/                # Recursos estáticos
│   │   ├── images/            # Imágenes (logo, etc.)
│   │   │   └── logo.png       # Logotipo de la página
│   ├── App.tsx                # Componente raíz
│   ├── main.tsx               # Punto de entrada
├── .env                       # Variables de entorno comunes
├── .env.development           # Variables específicas para desarrollo
├── .env.production            # Variables específicas para producción
├── package.json               # Dependencias del proyecto
├── README.md                  # Documentación del proyecto
├── tsconfig.json              # Configuración general de TypeScript
├── vite.config.ts             # Configuración de Vite
├── index.html                 # Archivo HTML principal
├── src/vite-env.d.ts          # Tipos de Vite y TypeScript
└── eslint.config.js           # Configuración de ESLint


. Comandos Útiles 
npm run dev	:Levanta el servidor de desarrollo en localhost.
npm run build	:Genera los archivos optimizados para producción.
npm run preview	:Previsualiza el build generado en un servidor local.
npm create vite siges_zeus_body: Crea el proyecto con la estructura de Vite 
