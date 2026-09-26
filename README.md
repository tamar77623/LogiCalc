# LogiCalc — Smart Freight & Logistics System 🚚✈️🌊

**LogiCalc** is a responsive, web-based shipping rate calculator and shipment tracking dashboard designed for modern freight and logistics services. Built with pure JavaScript and styled using Tailwind CSS, it accurately determines volumetric weights, calculates transparent shipping costs across air, land, and sea transportation modes, and provides an interactive shipment status tracker.

---

## 🌟 Key Features

* **Volumetric & Chargeable Weight Logic:** Implements standard international logistics formulas to evaluate whether actual weight or volumetric weight ($\text{L} \times \text{W} \times \text{H} / 5000$) governs the freight rate.
* **Multi-Modal Freight Rates:** Instantly calculates estimated costs based on selected transit methods:
  * ✈️ **Air Freight:** $12 / kg
  * 🚛 **Land Transport:** $6 / kg
  * 🚢 **Sea Freight:** $4 / kg
* **Interactive Shipment Tracker:** Mock tracking system with visual progress indicators and step-by-step milestone nodes based on tracking codes.
* **Logistics Services Overview:** Highlights core company features including Customs Clearance, Cargo Insurance, and Warehousing solutions.
* **Contact & Inquiries Section:** Sleek contact form integrated with corporate contact details for full UI completeness.
* **Responsive UI/UX:** Styled using **Tailwind CSS** with a modern blue theme, subtle hover animations, and smooth focus states.

---

## 📐 Freight Calculation Logic

LogiCalc uses international freight charge conventions:

1. **Volumetric Weight Calculation (kg):**
   $$\text{Volumetric Weight} = \frac{\text{Length (cm)} \times \text{Width (cm)} \times \text{Height (cm)}}{5000}$$

2. **Chargeable Weight Selection:**
   $$\text{Chargeable Weight} = \max(\text{Actual Weight}, \text{Volumetric Weight})$$

3. **Total Cost Estimation:**
   $$\text{Total Cost} = \text{Chargeable Weight} \times \text{Rate per kg}$$

---

## 🛠️ Built With

* **HTML5:** Semantic markup structure.
* **Tailwind CSS:** Utility-first CSS framework for modern styling and responsiveness.
* **JavaScript (Vanilla ES6+):** Pure DOM manipulation, event handling, dynamic logic, and input validation.

---

## 🚀 Getting Started

No build step or external dependencies are required. Simply clone the repository and open `index.html` in your web browser.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/LogiCalc.git](https://github.com/your-username/LogiCalc.git)
