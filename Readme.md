# ChuckJokesVue 💪

## Project Description

Web application developed with Vue.js that displays a collection of Chuck Norris facts in an interactive and visually appealing way.

## Features

- Vue.js instance that manages the data
- Data iteration using the `v-for` directive
- Minimalist and aesthetic design with animations
- Responsive interface for different devices
- Total of 5 Chuck Norris facts

## Technologies Used

- **Vue.js 2.6.14** - Progressive JavaScript framework
- **HTML5** - Application structure
- **CSS3** - Styles and animations
- **JavaScript** - Application logic

## Project Structure

│
├── index.html # Main HTML file with Vue structure
├── app.js # Vue instance with data
├── styles.css # CSS stylesheet
├── DOCUMENTACION_Activity12_DAW.pdf # Project PDF, screenshot and documentation
└── README.md # Project description

## Implementation Features

### 1. Vue Instance
A new Vue instance was created with the provided data array:

```javascript
new Vue({
    el: '#app',
    data: {
        chuck: [
            { "value": "Chuck Norris can skydive into outer space." },
            // ... more data
        ]
    }
});

2. v-for Directive

The data is displayed by iterating over the array using v-for:

<div v-for="(joke, index) in chuck" :key="index" class="joke-card">
    <div class="joke-number">{{ index + 1 }}</div>
    <p class="joke-text">{{ joke.value }}</p>
</div>

3. Aesthetic Design
Modern gradient background
Cards with shadows and hover effects
Responsive design for mobile devices
Visual numbering for each fact