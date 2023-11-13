const getName = (name, callback) => {
    setTimeout(() => {
        console.log(name);
        callback();
    }, 1000);
};

const getAll = () => {
    getName({name:"hoa"}, () => {
        let nameJson = JSON.stringify({name:"hoa",age:"23"});
        getName(nameJson, () => {
            let infor = JSON.parse(nameJson);
            getName(infor, () => {});
        });
    });
};

getAll()

