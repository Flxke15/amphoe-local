# Project

โปรเจค Vue 3 + Vuetify 3 สำหรับการพัฒนาแอปพลิเคชันที่ทันสมัย

## File Structure

```
danii/
├── public/                 # Static assets ที่จะถูก serve โดยตรง
├── src/                    # Source code หลักของโปรเจค
│   ├── assets/            # Assets ที่ต้องผ่าน build process (รูปภาพ, ฟอนต์)
│   ├── components/        # Vue components ที่ใช้ซ้ำได้
│   │   ├── AppFooter.vue # Footer component
│   │   ├── HelloWorld.vue # Example component
│   │   └── README.md     # คำอธิบาย components
│   ├── layouts/           # Layout templates สำหรับหน้าต่างๆ
│   │   └── default.vue   # Default layout พร้อม navigation drawer
│   ├── pages/             # หน้าเว็บต่างๆ (router views)
│   │   ├── index.vue     # หน้าแรก
│   │   └── README.md     # คำอธิบาย pages
│   ├── plugins/           # Vue plugins และ configurations
│   │   ├── index.js      # Plugin loader
│   │   ├── vuetify.js    # Vuetify configuration
│   │   └── README.md     # คำอธิบาย plugins
│   ├── router/            # Vue Router configuration
│   │   └── index.js      # Route definitions
│   ├── stores/            # Pinia stores สำหรับ state management
│   │   ├── app.js        # App store
│   │   ├── index.js      # Store loader
│   │   └── README.md     # คำอธิบาย stores
│   ├── styles/            # Global styles และ SCSS variables
│   │   ├── settings.scss # Vuetify SASS variables
│   │   └── README.md     # คำอธิบาย styles
│   ├── App.vue            # Root component
│   └── main.js            # Application entry point
├── auto-imports.d.ts      # TypeScript definitions (auto-generated)
├── components.d.ts        # Component types (auto-generated)
├── typed-router.d.ts      # Router types (auto-generated)
├── eslint.config.js       # ESLint configuration
├── jsconfig.json          # JavaScript configuration
├── vite.config.mjs        # Vite build configuration
├── package.json           # Project dependencies และ scripts
├── index.html             # HTML entry point
└── README.md              # Project documentation

```

## คำอธิบายโครงสร้างหลัก

### `/src/components`
เก็บ Vue components ที่สามารถนำไปใช้ซ้ำได้ในหลายๆ ที่ เช่น ปุ่ม, การ์ด, หรือส่วนประกอบอื่นๆ ที่ใช้บ่อย

### `/src/layouts`
เก็บ layout templates ที่กำหนดโครงสร้างหลักของหน้าเว็บ เช่น navigation bar, sidebar, footer เป็นต้น

### `/src/pages`
เก็บหน้าเว็บต่างๆ ที่จะถูกเชื่อมโยงกับ Vue Router แต่ละไฟล์จะเป็นหน้าเว็บหนึ่งหน้า

### `/src/router`
จัดการ routing ของแอปพลิเคชัน กำหนด URL path และเชื่อมโยงกับ pages

### `/src/stores`
ใช้ Pinia สำหรับจัดการ state ที่ต้องแชร์ข้อมูลระหว่างหลายๆ component

### `/src/plugins`
เก็บการตั้งค่า Vue plugins ต่างๆ เช่น Vuetify, Router, Store เป็นต้น

### `/src/styles`
เก็บ global styles และ SCSS variables สำหรับปรับแต่ง theme ของ Vuetify

## การใช้งาน

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies

- **Vue 3** - Progressive JavaScript Framework
- **Vuetify 3** - Material Design Component Framework
- **Vite** - Fast build tool
- **Pinia** - State Management
- **Vue Router** - Official Router for Vue.js

