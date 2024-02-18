let countTicket=0;
let grandTotalPrice=0;
let select =[];
const selectTickets= document.getElementsByClassName('ticket');

for (const ticket of selectTickets){
    ticket.addEventListener('click',function(event){
        countTicket+=1;
        const indexText= event.target.innerText
       

        // 
        if(select.length<4){
        if (!select.includes(ticket.innerText)){
            select.push(ticket.innerText);
            ticket.style.backgroundColor = "green";

            const tbody = document.getElementById('tbody');
            const tr =document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            td1.innerText = ticket.innerText;
            td2.innerText = 'business';
            td3.innerText = 550;
            td3.classList.add('seat-price');
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tbody.appendChild(tr);

        }
        else{
            const index= select.indexOf(indexText);
            console.log(index);
            select.splice(index, 1);
            ticket.style.backgroundColor= '';
            const tbody = document.getElementById('tbody');
         
            tbody.deleteRow(index);
          
            
        }
    }
    else if(select.length==4){
        if (select.includes(indexText)){
            const index= select.indexOf(indexText);
            console.log(index);
            select.splice(index, 1);
            ticket.style.backgroundColor= '';
            const tbody = document.getElementById('tbody');
         
            tbody.deleteRow(index);

        }
        else{
            alert('limit exceeded');
        }
            
          
            
        
    }
  
   
    


        // end
        
        // console.log(ticket.innerText);
        // ticket.style.backgroundColor = "green";
        // ticket.setAttribute('disabled',true);


        // appent table data
        // const tbody = document.getElementById('tbody');
        // const tr =document.createElement('tr');
        // const td1 = document.createElement('td');
        // const td2 = document.createElement('td');
        // const td3 = document.createElement('td');
        // td1.innerText = ticket.innerText;
        // td2.innerText = 'business';
        // td3.innerText = 550;
        // td3.classList.add('seat-price');
        // tr.appendChild(td1);
        // tr.appendChild(td2);
        // tr.appendChild(td3);
        // tbody.appendChild(tr);

        
        const totalPrice = select.length * 550;
        
        const price =document.getElementById('total-price');
        price.innerText = totalPrice;

        grandTotalPrice = select.length *550;
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = grandTotalPrice

        // add total 
        // let totalPrice = countTicket*550;
        // console.log(totalPrice);
        // const price =document.getElementById('total-price');
        // price.innerText = totalPrice;
        // // grand total
        // grandTotalPrice = countTicket*550;
        // const grandPrice = document.getElementById('grand-price');
        // grandPrice.innerText = grandTotalPrice

//enable coupon code button

        if(select.length>=4){
            const couponApply = document.getElementById('coupon-apply-Btn');
            couponApply.removeAttribute('disabled');
          
        // const node = event.target.parentNode.parentNode.parentNode
        // console.log(node);
         
        // for(const disable of selectTickets){
        //     disable.setAttribute('disabled',true);
        // }
        }

 
    })
}

// function totalPrice(){
//     const totalPrice =document.getElementsByClassName('seat-price');
//     console.log(totalPrice.innerHtml);

// }

// coupon code 

document.getElementById('coupon-apply-Btn').addEventListener('click',function(event){

    const coupon1 = document.getElementById('coupon1').innerText;
    const coupon2 = document.getElementById('coupon2').innerText;
    const couponText = document.getElementById('coupon-field').value;

    
    if(coupon1===couponText){
        const price =document.getElementById('total-price').innerText;
        const totalPrice = parseInt(price);
        
        const discoutPrice = totalPrice*0.15;
        grandTotalPrice = grandTotalPrice-discoutPrice;
        const grandPrice = document.getElementById('grand-price');

        grandPrice.innerText = grandTotalPrice;
        const node =  event.target.parentNode
        node.classList.add('hidden');
 

    }
    else if(coupon2===couponText){
        const price =document.getElementById('total-price').innerText;
        const totalPrice = parseInt(price);
        const discoutPrice = totalPrice*0.20;
        grandTotalPrice = grandTotalPrice-discoutPrice;
        
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = grandTotalPrice;
        const node =  event.target.parentNode
         node.classList.add('hidden');
        
    }
    else{
        alert('your coupon code is invalid')
    }
  
    
    
});







