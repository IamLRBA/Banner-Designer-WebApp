# Interactive Banner Designer

---

This is a responsive web application for creating custom banners with real-time previews, image uploads, and extensive styling options.

![Banner Designer Screenshot](https://raw.githubusercontent.com/AdelekeVanessa/Frontend-Web-App-for-Interactive-Banner-Design/main/public/Images/Interactive%20Banner%20Image.png)

---

## Features

- **Real-time Design Preview**: See changes instantly as you customize
- **Comprehensive Styling Options**:
  - Background color/image customization
  - Text styling with 40+ font choices
  - Size and border radius controls
- **Image Management**:
  - Upload multiple images
  - Set as background or drag onto canvas
  - Right-click to delete
- **Drawing Tools**:
  - Pen, marker, brush, and eraser
  - Adjustable stroke width and transparency
- **Responsive Design**: Works on various screen sizes
- **Modern UI**: Intuitive interface with collapsible sections

---

## Technologies Used

### Frontend

- **React.js** (with Hooks)
- **Framer Motion** (for animations)
- **react-color** (color pickers)
- **react-icons** (icon library)

### Styling

- **CSS3** (custom styles)
- **Tailwind CSS** (utility classes)

---

## Project Structure

Frontend-Web-App-for-Interactive-Banner-Design/
├── public/ # Static assets
│ ├── Images/ # Default images
│ └── index.html # Main HTML file
├── src/
│ ├── components/ # React components
│ │ ├── Banner.js # Main banner display
│ │ ├── DraggableImage.js # Image handling
│ │ └── InteractiveBanner.js # Main control panel
│ ├── App.css # Global styles
│ ├── App.js # Root component
│ └── index.js # Entry point
├── package.json # Project dependencies
└── README.md # This file

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AdelekeVanessa/Frontend-Web-App-for-Interactive-Banner-Design.git
   ```
2. Navigate to project directory:

   ```bash
    cd Frontend-Web-App-for-Interactive-Banner-Design
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start development server:

   ```bash
   npm start
   ```

5. Open http://localhost:3000 in your browser

## How to Use

[![Interactive Banner Demo](https://raw.githubusercontent.com/AdelekeVanessa/Frontend-Web-App-for-Interactive-Banner-Design/main/public/Images/Interactive%20Banner%20Image.png)](https://github.com/AdelekeVanessa/Frontend-Web-App-for-Interactive-Banner-Design/raw/main/public/Video/Interactive%20Banner.mp4)

Click the image above to download the demo video.

### Customize Background:

- Upload an image or choose a solid color
- Adjust banner dimensions using sliders

### Add Text:

- Type your text in the input field
- Choose from 40+ fonts
- Customize color, style, and transformations

### Add Images:

- Upload images via the upload button
- Drag thumbnails onto the banner
- Right-click to delete unwanted images

### Use Drawing Tools:

- Select pen, marker, brush, or eraser
- Adjust stroke width and transparency
- Click **"Clear Drawings"** to start over

### Save Your Design:

- Right-click the banner and select **"Save Image As"**
- Or use browser screenshot tools

---

## Customization Options

| Feature           | Options Available                                              |
| ----------------- | -------------------------------------------------------------- |
| Background        | Color picker, Image upload                                     |
| Text              | 40+ fonts, 12+ styles, Color picker                            |
| Banner Dimensions | Width (100–1200px), Height (50–800px), Border radius (0–100px) |
| Drawing Tools     | Pen, Marker, Brush, Eraser with adjustable settings            |

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the project**

2. **Create your feature branch**
   e.g:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes

   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. Push to the branch

   ```bash
   git push origin feature/AmazingFeature
   ```

5. Open a Pull Request

## Contact

**JERRY LARUBA FESTUS**
Github: [@IamLRBA](https://github.com/IamLRBA)
Email: jerrylarubafestus@gmail.com

🔗 **Project Link**: [Banner Designer WebApp](https://github.com/IamLRBA/Banner-Designer-WebApp)
