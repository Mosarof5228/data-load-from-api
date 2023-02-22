const user = { id: 1, name: "Gorib Amir", job: "actor" };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified)

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet vott er goli',
        city: 'ranbir',
        country: 'bd'
    },
    products: ['laptop', 'monitor', 'mic', 'keybord'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

/*





1.jehoto JSON string text format k, sob language boje, ty server theke data adan prodan  korte JSON a convert kore korte hoy.
2.JASON hocce independent ati kono programing language er
sompotti na.
3.JASON er property and value ("" ) sob somoy double qutation er bitore thake without number and boolean.
4.JASON sob somoy javascript object er moto kore string return kore.
5.tar mane JSON holo, javascript er object er motoi but object na.
6.clint theke kono kicur jonne request pathai server a and
server patahai clints er kace.
2.jokhon server a kono kicur jonne request kora hoy tokhon
seti akti text format onosoron kore servere jai.karon server json string text format chara onno kicu bojena. ty amaderke json string a convert korte hoy.
3.text format ti holo JSON string text format.
4.server side theke kono kicu pawar jonne request korle tokhon 
JSON string format a request pathate hoy.karon Jason String format k
all language support kore and boje. 
5.JSON er meaning holo Javascript object Notation.
 */