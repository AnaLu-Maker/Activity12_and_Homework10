// ─── Chuck Card Component ───────────────────────────────────────────────────
// Receives icon_url, value, and number as props.
// Uses a Bootstrap card with image on top and text in the body.
Vue.component('chuck-card', {
    props: {
        icon_url: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        }
    },
    template: `
        <div class="card h-100 shadow chuck-card">
            <!-- Image cap: dark background with Chuck icon centered -->
            <div class="chuck-img-cap d-flex align-items-center justify-content-center">
                <img :src="icon_url"
                     class="chuck-icon"
                     :alt="'Chuck Norris #' + number"
                     referrerpolicy="no-referrer">
            </div>

            <!-- Card body -->
            <div class="card-body d-flex flex-column">
                <span class="badge bg-warning text-dark mb-2 align-self-start"># {{ number }}</span>
                <p class="card-text flex-grow-1">{{ value }}</p>
            </div>
        </div>
    `
});

// ─── Vue Instance ────────────────────────────────────────────────────────────
new Vue({
    el: '#app',
    data: {
        chuck: [
            {
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "value": "Chuck Norris can skydive into outer space."
            },
            {
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "value": "The chief export of Chuck Norris is pain."
            },
            {
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "value": "Chuck Norris doesn't read books. He stares them down until he gets the information he wants."
            },
            {
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "value": "Time waits for no man. Unless that man is Chuck Norris."
            },
            {
                "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                "value": "If you spell Chuck Norris in Scrabble, you win. Forever."
            }
        ]
    }
});