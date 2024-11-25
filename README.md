# siges_zeus_mf
Contiene todos los microfront de siges_zeus
siges_zeus_mf/
├── .gitignore
├── LICENSE
├── README.md
└── siges_zeus_header/
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── public/
    │   └── vite.svg
    └── src/
        ├── App.tsx
        ├── main.tsx
        ├── vite-env.d.ts
        ├── assets/
        │   └── images/
        │       ├── logo.png
        │       └── react.svg
        ├── modules/
        │   └── header/
        │       ├── components/
        │       │   └── Header.tsx
        │       ├── locales/
        │       │   ├── en.json
        │       │   └── es.json
        │       └── index.ts
        └── shared/
            └── i18n/
                ├── config.ts
                ├── index.ts
                └── locales/
                    ├── en/
                    │   └── common.json
                    └── es/
                        └── common.json

Descripción de la Estructura:

>siges_zeus_mf/: Directorio raíz del proyecto que contiene:
>>.gitignore: Especifica qué archivos o directorios deben ser ignorados por Git.
>>LICENSE: Define la licencia del proyecto.
>>README.md: Proporciona información general sobre el proyecto.
>>siges_zeus_header/: Contiene el microfrontend del encabezado de la aplicación.
>>>.gitignore: Especifica qué archivos o directorios deben ser ignorados por Git en este microfrontend.
>>>index.html: Archivo HTML principal que sirve como plantilla para la aplicación React.
>>>package.json: Contiene las dependencias y scripts necesarios para este microfrontend.
>>>README.md: Documentación específica del microfrontend siges_zeus_header.
>>>tsconfig.app.json: Configuración específica para la aplicación en TypeScript.
>>>tsconfig.json: Configuración general para TypeScript.
>>>tsconfig.node.json: Configuración específica para Node.js en TypeScript.
>>>vite.config.ts: Configuración para Vite, el bundler utilizado en el proyecto.
>>>public/: Carpeta que contiene archivos públicos y estáticos.
>>>>vite.svg: Imagen SVG utilizada en el proyecto.
>>>src/: Contiene el código fuente del microfrontend.
>>>>App.tsx: Componente principal de la aplicación React.
>>>>main.tsx: Punto de entrada de la aplicación React.
>>>>vite-env.d.ts: Declaración de tipos para el entorno de Vite.
>>>>assets/: Contiene recursos estáticos como imágenes.
>>>>images/: Directorio de imágenes utilizadas en la aplicación.
>>>>logo.png: Archivo de logotipo específico.
>>>>react.svg: Imagen SVG del logotipo de React.
>>>>modules/: Organiza módulos funcionales de la aplicación.
>>>>header/: Módulo del encabezado.
>>>>components/: Contiene componentes del módulo.
>>>>Header.tsx: Componente del encabezado.
>>>>locales/: Archivos de localización específicos del módulo.
>>>>en.json: Localización en inglés.
>>>>es.json: Localización en español.
>>>>index.ts: Punto de exportación central del módulo header.
>>>>shared/: Contiene recursos compartidos entre diferentes módulos.
>>>>i18n/: Sistema de internacionalización.
>>>>config.ts: Configuración del sistema de internacionalización.
>>>>index.ts: Punto de exportación central para la funcionalidad de internacionalización.
>>>>locales/: Archivos de localización compartidos.
>>>>en/: Localización en inglés.
>>>>common.json: Recursos comunes en inglés.
>>>>es/: Localización en español.
>>>>common.json: Recursos comunes en español.