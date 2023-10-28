

const imgArray = [
   {
        name: "imageOne",
        src: "https://picsum.photos/seed/picsum/200/300",
        alt : "imageOne"
    
    },
    {
        name: "imageSecond",
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "imageSecond"
    },
    {
        name: "imageThird",
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "imageThird"
    },
    {
        name: "imageFourth",
        src: "https://picsum.photos/seed/picsum/200/300",
        alt: "imageFourth"
    }
];
    function Image(props) {
    return(
        <>
<div>
    <h1>Image array</h1>
</div>
<div>
<div>
<img src="https://picsum.photos/seed/picsum/200/300" alt="imgae tag"/>
<div>
    <p>Contact: +1251hg
    </p>
    <p>Email: rab@where.com</p>
</div>
</div>
<div>
<img src="https://picsum.photos/seed/picsum/200/300" alt="imgae tag"/>
<div>
    <p>Contact: +1251hg
    </p>
    <p>Email: rab@where.com</p>
</div>
</div>
<div>
<img src="https://picsum.photos/seed/picsum/200/300" alt="imgae tag"/>
<div>
    <p>Contact: +1251hg
    </p>
    <p>Email: rab@where.com</p>
</div>
</div>
</div>

</>
    );
}
export default Image;