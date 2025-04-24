let d;

d = new Date();
d.toString;

d = new Date(2021, 5, 10, 13, 45, 0); // month is 0 index. starts at 0

d - new Date('2021-07-10'); // normal index
d = new Date('07/10/2022 12:30:11');
d = new Date('2022-07-10'); // off by day

d = Date.now();

d = new Date('07-10-2022 12:30:00');
d = d.getTime();

d = new Date(1657470600000);

d = Math.floor(Date.now() / 1000);

console.log(d);
