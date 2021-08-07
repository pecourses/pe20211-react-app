import React, { Component } from "react";
import PropTypes from "prop-types";
import Slide from "./Slide";
import styles from "./Carousel.module.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      isFullScreen: false,
      isPlaying: false,
      delay: 1000,
    };
  }

  //   get prevIndex() {
  //     const { currentIndex } = this.state;
  //     const { slides } = this.props;
  //     return (currentIndex - 1 + slides.length) % slides.length;
  //   }

  //   get nextIndex() {
  //     const { currentIndex } = this.state;
  //     const { slides } = this.props;
  //     return (currentIndex + 1) % slides.length;
  //   }

  //   prevSlide = () => {
  //     const { currentIndex } = this.state;
  //     const { slides } = this.props;
  //     this.setState({
  //       currentIndex: (currentIndex - 1 + slides.length) % slides.length,
  //     });
  //   };

  //   nextSlide = () => {
  //     const { currentIndex } = this.state;
  //     const { slides } = this.props;
  //     this.setState({
  //       currentIndex: (currentIndex + 1) % slides.length,
  //     });
  //   };

  // prevIndex, nextIndex, prevSlide, nextSlide

  render() {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    // Грузим 3 слайда: текущий показываем, 2 соседних грузим,
    //    но скрываем, для быстрого отображения при переключении на них
    // Если показывать 3 одновременно, то грузим 5: три показать,
    //    2 соседних аналогично предыдущему
    // prevIndex - геттер для получения предудущего индекса
    // nextIndex - геттер для получения следующего индекса
    // prevSlide - обработчик для установки предыдущего слайда текущим (при переключении назад)
    // nextSlide - обработчик для установки следующего слайда текущим (при переключении вперед)
    return (
      <article className={styles.container}>
        <Slide {...slides[this.prevIndex]} />
        <Slide {...slides[currentIndex]} isCurrent />
        <Slide {...slides[this.nextIndex]} />
        <div className={styles.buttonContainer}>
          <button onClick={this.prevSlide}>{"<"}</button>
          <button onClick={this.nextSlide}>{">"}</button>
        </div>
      </article>
    );
  }
}
export default Carousel;
