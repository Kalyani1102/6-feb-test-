var heading = document.getElementById('heading');
var description = document.getElementById('description');
var post_btn = document.getElementById('post-btn');
var multipost = document.getElementById('multipost');

var arr = [{ head : `New Blog`,
desc : `Social media platforms like Facebook, Twitter, Instagram, and LinkedIn. Knowledge platforms like Stack Overflow, Quora, and Yahoo! Answers. Media sharing platforms like YouTube, Spotify, and Vimeo. Service-oriented platforms like Uber, Airbnb, and GrubHub.Various channels have been defined by the Government of India for a widespread of the sources and means to provide education to different corners of the country. Discussed further in this article are the channels and initiatives taken up by the Government for Digital Education in India..`,
},
{
    head : `New Blog`,
    desc : `A digital platform is any network that facilitates connections and exchanges between people (exchanging goods, services, or simply just communications). Facebook, Uber, and Airbnb are all examples of digital platforms, giving you an idea of the magnitude of this trend.Digital Education is a technique or method of learning which involves technology and digital devices. This is a new and broad technical sphere which shall help any student attain knowledge and gain information from any corner across the country. It is believed that Digital Education in India is the future of education and learning. .`
},
{
    head : `New blogg`,
    desc : `Digital Education in India is the way forward to learning and gaining knowledge through the means of technology and digital devices.

    COVID-19 pandemic had briefly disrupted the school education system in India. Since the 1st lockdown in March 2020, all the states have responded to the COVID-19 situation with speed and innovation. The existing digital resources were leveraged to maintain continuity in students education..`,

}];
displayPost();
post_btn.addEventListener('click', addPost)

function addPost(){

    if(heading.value == "" || description.value == "")
    {
        alert("You can't have Null Post");
        console.log(heading.value,description.value);
    }
    else{
        let obj = { head : heading.value,
            desc : description.value,
        }
        arr.push(obj);
        console.log(arr);
        heading.value= "";
        description.value = "";
        displayPost();
    }
    
}

function displayPost(){
    multipost.innerHTML = "";
    document.getElementById('status').innerText = "Want to post something?";
    for(let i = arr.length-1; i >= 0 ; i--) 
    {
        let div = `<main id="main">
        <div id="post">
            <h3>DIGITAL PLATFORM IN EDUCATION</h3>
        </div>
        <div id="post-add">
            <h3 id="head">${arr[i].head}</h3>
            <p id="desc">${arr[i].desc}</p>
        </div>
        <button id="edit-btn" onclick="edit('${arr[i].head}');">Edit Post</button>
        <button id="delete-btn" onclick="Delete('${arr[i].head}');">Delete Post</button>
    </main>`
        multipost.innerHTML += div;
    }
}

function Delete(item) {
    let index;
    for (let i = 0 ; i< arr.length; i++) {
        if (arr[i].head == item){
            index = i;
        }
    }
    arr.splice(index, 1);
    displayPost();
}
function edit(item){
    let index;
    for (let i = 0 ; i< arr.length; i++) {
        if (arr[i].head == item){
            index = i;
        }
    }
    heading.value = arr[index].head;
    description.value = arr[index].desc;
    Delete(arr[index].head);
    document.getElementById('status').innerText = 'Edit';
    document.getElementById('canvas').scrollIntoView() ;
}
