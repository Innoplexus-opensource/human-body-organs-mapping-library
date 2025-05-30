# Human Body Organs Mapping Library 🧬  
**Interactive SVG-based anatomical visualization for React**

## Features ✨  
✅ 30+ Organs | ✅ Male/Female SVGs | ✅ Real-Time Highlighting | ✅ Medical Terminology  

## Installation ⚙️  
npm install human-body-organs-mapping-library

or
yarn add human-body-organs-mapping-library

## Usage 🚀  
import React from 'react';
import HumanBodyComponents from 'human-body-organs-mapping-library';

function App() {
    return (
        <div className="app-container">
            <HumanBodyComponents />
        </div>
    );
}

---

## Core Component: HumanBodyComponents 🔧  
**Location:** `src/HumanBodyComponents/`  
**Features:**  
- **Integrated Organ Selector** (Ant Design-powered search)  
- **Real-Time SVG Updates**  
- **Gender-Specific Views**  

**Props:**  
*(Self-managed state - no props required)*  
const [organsArray, setOrgansArray] = useState([]); // Internal state

---

## Anatomy Visualization 🖼️  
// Male Anatomy
<MaleSVG organsArray={['heart', 'lung']} />

// Female Anatomy
<FemaleSVG organsArray={['ovary', 'uterus']} />

---

## Customization 🎨  
**1. Add New Organs**  
Edit options array in `HumanBodyComponents.js`:  
options={[
    { value: 'glenoid_cavity', label: 'Glenoid Cavity' }
]}

**2. Modify Styling**  
Edit `SearchBar.css`:  
.highlighted-organ {
    fill: #ff4757;
    stroke: #d63031;
}

---

## Project Structure 📂  
src/
├── HumanBodyComponents/
│ ├── HumanBodyComponents.js # Core logic
│ └── HumanBody.css # Component styles
├── SVGs/ # Anatomy visuals
│ ├── MaleSVG.js
│ └── FemaleSVG.js
└── index.js # Main export
