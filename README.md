
# siges_zeus_mf
Proyecto utiizando microfront con React + Vite + and
La arquitectura basada en componentes
Contiene todos los microfront de siges_zeus
siges_zeus_mf/
└── siges_zeus_header/
    ├── .gitignore
    ├── LICENSE
    ├── README.md
    ├── package.json                  # Configuración de dependencias y scripts
    ├── tsconfig.json                 # Configuración general de TypeScript
    ├── tsconfig.node.json            # Configuración específica para Node.js
    ├── vite.config.ts                # Configuración del bundler Vite
    ├── public/                       # Archivos públicos y estáticos
    │   └── vite.svg
    └── src/
        ├── App.tsx                   # Componente raíz
        ├── main.tsx                  # Punto de entrada
        ├── assets/                   # Recursos estáticos (imágenes, fuentes, etc.)
        │   └── images/
        │       ├── logo.png
        │       └── react.svg
        ├── modules/                  # Funcionalidad agrupada por módulos
        │   └── header/               # Módulo del encabezado
        │       ├── components/       # Componentes Presentacionales
        │       │   ├── HeaderView.tsx
        │       │   └── Logo.tsx
        │       ├── hooks/            # Hooks personalizados
        │       │   └── useMenuItems.ts
        │       ├── services/         # Lógica de negocio o integración API
        │       │   └── menuService.ts
        │       ├── locales/          # Archivos de localización específicos del módulo
        │       │   ├── en.json
        │       │   └── es.json
        │       └── index.ts          # Punto de entrada del módulo Header
        └── styles/                   # Estilos globales o específicos
            └── global.css


Descripción de la Estructura:

Explicación de Cada Sección
1. Archivos en el nivel raíz (siges_zeus_header/)
.gitignore y LICENSE: Controlan qué archivos se versionan y las condiciones de uso del proyecto.
package.json: Define las dependencias y los scripts de construcción, prueba y desarrollo.
tsconfig.json y vite.config.ts: Configuración para TypeScript y Vite respectivamente.
2. Carpeta src/
App.tsx y main.tsx:
App.tsx: Define la estructura principal de la aplicación.
main.tsx: Punto de entrada que monta la aplicación en el DOM.
assets/: Contiene recursos estáticos como imágenes.
3. Carpeta modules/
header/:
Agrupa toda la lógica y componentes relacionados con el encabezado.
Incluye subcarpetas para componentes (components/), hooks personalizados (hooks/), servicios de negocio/API (services/) y localización específica (locales/).
index.ts: Punto de entrada que exporta lo necesario del módulo para que sea accesible desde otros módulos.
4. Carpeta shared/
Componentes Compartidos: Componentes genéricos como botones reutilizables.
Hooks Reutilizables: Lógica común para la aplicación.
Internacionalización (i18n/):
Configuración y recursos de idiomas compartidos entre los módulos.
Carpeta locales/ con traducciones comunes (en/common.json y es/common.json).
5. Carpeta styles/
global.css: Contiene estilos globales que se aplican a toda la aplicación.

Contexto del Proyecto: SIGES Zeus Header

Descripción General
El proyecto SIGES Zeus Header es un módulo frontend desarrollado como un microfrontend utilizando React, Vite y Ant Design. Este módulo forma parte de un sistema más grande llamado SIGES Zeus, que está diseñado para ser escalable, modular y altamente reutilizable. Su objetivo principal es proporcionar un encabezado (header) que puede ser integrado en distintas aplicaciones del ecosistema SIGES Zeus.

Tecnologías Principales
React: Para el desarrollo de la interfaz de usuario basada en componentes.
Vite: Como bundler para un desarrollo rápido y eficiente.
Ant Design: Para un diseño moderno y consistente de componentes UI.
TypeScript: Para garantizar un código tipado y más seguro.
Internacionalización (i18n): Manejo de múltiples idiomas con archivos de localización.

Funcionalidad del Encabezado (Header)
El módulo header proporciona las siguientes funcionalidades:

Diseño del Encabezado:
Un logotipo en el lado izquierdo.
Un menú horizontal con navegación.
Internacionalización:
Soporte para múltiples idiomas (en, es).
Componentización:
Uso de componentes reutilizables como Logo y Menu.
Extensibilidad:
Fácil de integrar con otros microfrontends o aplicaciones principales.

Características Técnicas
Estilos:
Estilos globales definidos en styles/global.css.
Uso de clases personalizadas para estilos específicos del header.
Componentes:
HeaderView: Renderiza la UI del encabezado.
Logo: Componente reutilizable para el logotipo.
Lógica Personalizada:
useMenuItems: Hook para manejar la generación de elementos del menú.
menuService: Simulación o consumo de datos dinámicos para el menú.
Internacionalización:
Archivos JSON (en.json, es.json) para gestionar textos traducibles.

Objetivo del Proyecto
Proveer un encabezado altamente modular, reutilizable y extensible que se adapte a las necesidades de múltiples aplicaciones del sistema SIGES Zeus. Este módulo debe ser fácil de integrar, mantener y extender con nuevas funcionalidades, como estados dinámicos o integración con servicios externos.

