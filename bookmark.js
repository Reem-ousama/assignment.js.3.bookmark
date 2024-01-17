var siteName=document.getElementById('Sname')
var urlSite=document.getElementById('Surl')
var siteList=[];

if(localStorage.getItem('siteList')!==null){
    siteList=JSON.parse(localStorage.getItem('siteList'))
    display();
    
}

function createList(){

    if(validationName() && validationUrl()){
        var list={
            SName:siteName.value,
            URLSite:urlSite.value
        }
        siteList.push(list)
        console.log(siteList)
        display()
    }else{
        submit()
    }
   
}

function display(){
    trs=``
    for(var i=0 ; i<siteList.length ; i++){
        trs+=`
         <tr>
        <td>${i+1}</td>
        <td>${siteList[i].SName}</td>
        <td><button class="btn1" >
        <a href="hrefs" target="_blank" onclick="visitUrl('${siteList[i].URLSite}')" >
        <i class="fa-solid fa-eye "></i>
        </a>Visit</button></td>
        <td> <button class=" bdel" Onclick="deleterow(${i})" ><i class="fa fa-trash"></i>Delete</button></td>
       
     </tr>
     `
    }
    document.getElementById('tableContent').innerHTML=trs;
}


function deleterow(index){
    siteList.splice(index,1)
    console.log(siteList)
    localStorage.setItem('siteList' , JSON.stringify(siteList))

    display()
    
}

function visitUrl(visitedUrl){
    console.log(visitedUrl);
    window.open(visitedUrl,'_blank')
}

function validationName(){
var nameRegex=/^[A-Z][a-z]{3,15}$/

if(nameRegex.test(siteName.value)){
    siteName.classList.add('is-valid')
     siteName.classList.remove('is-invalid')
    return true
}else{
    siteName.classList.add('is-invalid')
    siteName.classList.remove('is-valid')
    return false;
}
}

function validationUrl(){
var nameRegex=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
if(nameRegex.test(urlSite.value)){
    urlSite.classList.add('is-valid')
    urlSite.classList.remove('is-invalid')
    return true
}else{
    urlSite.classList.add('is-invalid')
    urlSite.classList.remove('is-valid')
    return false;
}
}

// var fixedBox=document.getElementById('fixed-box')
// var sub=document.getElementById('btn')

// function submit(){
   
//     sub.addEventListener('click',function(){
//        fixedBox.classList.replace('d-none','d-flex');
        
//     })
// }


// var closebtn=document.getElementById('closeBtn')

// closebtn.addEventListener('click',function(){
//     fixedBox.classList.replace('d-flex','d-none')

// })