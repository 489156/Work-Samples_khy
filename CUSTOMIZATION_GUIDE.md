# Consulting Casebook - Customization Guide

## 🎯 Quick Start

Your professional consulting casebook is ready! All content can be easily updated by editing a single file:

**📁 `/src/app/data/portfolio-data.ts`**

## ✏️ How to Update Content

### 1. Update Your Positioning Statement
```typescript
export const positioning = "Your positioning statement here";
```

### 2. Update Core Competencies (3 recommended)
```typescript
export const coreCompetencies: CoreCompetency[] = [
  {
    title: "Your Competency Title",
    description: "Detailed description of this competency"
  },
  // Add 2 more...
];
```

### 3. Add/Edit Case Studies
Each case study becomes one full page. Simply add more objects to the array:

```typescript
export const caseStudies: CaseStudy[] = [
  {
    year: "2024",
    company: "Client Company Name",
    topic: "Project Title",
    details: "Overview of the project...",
    challenge: "What challenge did the client face?",
    approach: [
      "Step 1 of your methodology",
      "Step 2 of your methodology",
      // Add more steps...
    ],
    impact: [
      {
        metric: "Metric Name",
        value: "+32%",
        description: "What this metric means"
      },
      // Add more metrics (3 recommended)
    ],
    chartData: [
      { name: "Q1", value: 65 },
      { name: "Q2", value: 78 },
      // Add more data points...
    ],
    tableData: [
      {
        category: "Metric Category",
        before: "Before value",
        after: "After value",
        improvement: "% improvement"
      },
      // Add more rows...
    ]
  },
  // Add more case studies...
];
```

## 🎨 Design Features

✅ **Award-Winning Design** - Inspired by McKinsey, BCG, and top consulting firms
✅ **High Text Visibility** - Professional typography with excellent contrast
✅ **Smooth Navigation** - Full-page sections with elegant transitions
✅ **Responsive** - Optimized for desktop, tablet, and mobile
✅ **Interactive Charts** - Data visualizations using Recharts
✅ **Easy Management** - Single file to edit for all content updates

## ⌨️ Navigation

- **Mouse/Trackpad**: Scroll naturally or use navigation buttons on the right
- **Keyboard**: Use Arrow Up/Down or Page Up/Down keys
- **Touch**: Swipe up/down or tap navigation buttons

## 🎭 Customizing Design

### Colors
Main colors are defined with Tailwind classes in components:
- Primary: `slate-950` (dark backgrounds)
- Accent: `cyan-400` and `cyan-500`
- Text: `slate-700`, `slate-900`

### Fonts
Fonts are configured in `/src/styles/fonts.css`:
- Body text: Inter
- Headlines: Playfair Display

### Typography Scale
The application uses semantic HTML elements (h1, h2, h3) that automatically scale responsively.

## 📱 Mobile Optimization

The casebook is fully responsive with:
- Smaller text sizes on mobile
- Simplified navigation
- Touch-optimized buttons
- Stacked layouts for narrow screens

## 🚀 Adding More Pages

To add more case studies, simply add more objects to the `caseStudies` array in `/src/app/data/portfolio-data.ts`. Each case study automatically becomes a new page.

## 💡 Pro Tips

1. **Keep It Visual**: Use charts and tables to make data compelling
2. **Tell a Story**: Structure each case study with Challenge → Approach → Impact
3. **Quantify Results**: Use specific metrics and percentages
4. **Stay Consistent**: Maintain the same structure across all case studies
5. **Update Regularly**: Keep your casebook current with latest projects

---

Need help? The code is well-documented and follows React best practices.
