function Image() {

    const img = "https://picsum.photos/200";
    const imh = " components/Image1.jpg";
    return(

        <div>
    <img src="components/Image1.jpg" alt= "imgage" />
    <img src = {img} alt =" img" />
    <img src={imh} alt="imgh" />

    
        </div>
    );
}
export default Image;