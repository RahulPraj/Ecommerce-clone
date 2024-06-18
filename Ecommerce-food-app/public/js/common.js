let allLikeButton = document.querySelectorAll('.like-btn');

async function likeButton(productId){
    try{
        let respose =   await axios({
            method: 'post',
            url: `/products/${productId}/like`,
            headers:{'X-Requested-with' : 'XMLHttpRequest'}
          });
          console.log(respose);
    }
    catch(e){
        window.location.replace('/login');
        console.log(e.message, 'error hai ye window vali line ka')
    }
  
}



for(let btn of allLikeButton){
    btn.addEventListener('click',()=>{
      let productId =   btn.getAttribute('product-id');
        likeButton(productId);
    })
}