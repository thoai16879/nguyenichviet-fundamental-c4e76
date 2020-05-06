// Array - List

// let mon1 = 'Com';
// let mon2 = 'Bun';
// let mon3 = 'Pho';
// let menu= ['com','bun','pho','my'];
//           //0     1     2     3(length - 1)
// // index, value, length;
// // Read
// console.log(menu[0]);
// console.log(menu[1]);
// console.log(menu[2]);
// console.log(menu[3]);

// for =>
// com
// bun
// my

// let n = menu.length;
// for( let i=0;i<n;i++){
//     console.log(menu[i]);
// }


// const a = [];
// const b = [];
// console.log(a);
// console.log(b);
// console.log(a === b);

// const books = ['Random 1', 'Random 2', 'Random 3'];

// C,R,U,D - Create, Read, Update, Delete
// Read one =>
// console.log(books[0]);

// Read all
// for(let i=0;i<books.length;i++){
//     console.log(books[i]);
// }

// Update
// books[0] = 'update name';
// console.log(books);

// Create - tạo mới một phần tử đẩy nó vào cuối hoặc vào đầu
// append Last, append First;
// Delete
// delete last, delete first
// console.log(books);

// const lastLength = books.push('book last');
// console.log(books);
// const firstLength = books.unshift('book first');
// console.log(books);
// const last = books.pop();
// console.log(books);
// const first = books.shift();
// console.log(books);

// // delete phần tử bất kỳ trong mảng khi biết chỉ số của phần tử đó
// // delete paticular element in array
// books.splice(1,2);
// console.log(books);


// To do list

// const todoList = ['Go to work at 8 am'];

// Bai 1:
// Cho nguoi dung nhap vao CRUD
// C: Cho nguoi dung nhap vao todo List moi va them vao cuoi cung
// R: In ra toan bo todo list hien co
// U: Hoi nguoi dung muon update phan tu so may
// sau day cho nguoi dung nhap lai noi dung muon update
// D: Hoi nguoi dung muon xoa phan tu so may

// Sau moi buoc CRUD => in ra toan bo todo list hien co

// Bai 2:
// Khi nguoi dung nhap vao e => ket thuc chuong trinh
// con lai cac truong hop khac thi van nhu tren
// let loop = true;
// while(loop){
//     let bien = prompt("nhap vao CRUD");
//     if(bien === "C"){
//         const newLength = todoList.push(prompt("nhap noi dung"));
//         for(let i=0;i<todoList.length;i++){
//             console.log(todoList[i]);
//         }    
//     }else if(bien === "R"){
//         for(let i=0;i<todoList.length;i++){
//             console.log(todoList[i]);
//         }
//     }else if(bien === "U"){
//         let n = Number(prompt("nhap phan tu thu n can update"));
//         todoList[n-1] = prompt("nhap noi dung update");
//         for(let i=0;i<todoList.length;i++){
//             console.log(todoList[i]);
//         }
//     }else if(bien === "D"){
//         let m = Number(prompt("nhap phan tu thu m can xoa"));
//         todoList.splice(m-1,1);
//         for(let i=0;i<todoList.length;i++){
//             console.log(todoList[i]);
//         }
//     }else{
//         console.log("invalid command"); 
//     }
//     let stop = prompt("ban co muon dung chuong trinh");
//     if(stop === "e"){
//         loop = false;
//     }
// }