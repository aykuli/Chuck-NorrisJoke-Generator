export const jokes ={
    getOne: function () {
        return new Promise((resolve, reject) => {
            fetch('http://api.icndb.com/jokes/random')
            .then(res => res.json())
            .then(data => {
                resolve(data.value.joke);
        })
       });
    }
}
