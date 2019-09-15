import { jokes } from "./jokes";

jokes.getOne()
    .then(joke => {
        document.getElementById('joke').innerHTML = joke;
    });
