import { Component } from "react";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            active: 0,
        };
    }

    handleIndexClick = (event) => {
        this.setState({
            active: parseInt(event.target.dataset.index),
        });
    };

    render() {
        const { images } = this.props;
        const { active } = this.state;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((img, idx) => (
                        <img
                            key={img}
                            src={img}
                            alt="animal_thumbnail"
                            className={idx === active ? "active" : ""}
                            data-index={idx}
                            onClick={this.handleIndexClick}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
