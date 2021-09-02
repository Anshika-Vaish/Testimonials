import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const Testimonial = () => {
    return (
        <div
            className="testimonial"
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
            <div style={{ width: "50%", textAlign: "center" }}>
                <h1 style={{ marginBottom: 20, color: "blue" }}>Testimonial component examples</h1>
                <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" head="PAULA WILSON" text="Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
        Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
        tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
        fringilla massa. Etiam hendrerit dolor eget rutrum" />
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" head="FRANZ GASTLER" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolore? Quos officia odio repudiandae provident recusandae minima minus laborum. Ipsam rum nulla odit, ducimus minima, labore harum! Unde dicta fuga iure saepe, necessitat!."/>
                    <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" head="HAMISH BOYD" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus voluptatibus placeat earum temporibus officiis cupiditate, rerum nulla odit, ducimus minima, labore harum! Unde dicta fuga iure saepe, necessitatibus perferendis!"/>
                </Slider>
            </div>
        </div>
    );
};

const Card = ({ img, text, head }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "gray",
            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                }}
            />

            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: "green" }}>{head}</span>
            </p>
            <p style={{ color: "black" }}>{text}</p>
        </div>
    );
};

export default Testimonial;