siges_zeus_header/
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
│   │   ├── header/            # Módulo Header
│   │   │   ├── components/    # Componentes específicos del Header
│   │   │   │   └── Header.tsx
│   │   │   ├── locales/       # Traducciones específicas del Header
│   │   │   │   ├── en.json
│   │   │   │   └── es.json
│   │   │   └── index.ts       # Exportaciones del Header
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
npm run dev	Levanta el servidor de desarrollo en localhost.
npm run build	Genera los archivos optimizados para producción.
npm run preview	Previsualiza el build generado en un servidor local.
