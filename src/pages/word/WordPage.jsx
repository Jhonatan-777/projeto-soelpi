import { useState } from 'react';

import { WordContainer, LimitContainer, ContainerTitle, ContainerSlide, BtnsContainer } from './WordPage.style';

import lineDetail from "../../assets/img/detail/line-detail.png";

import btnsImgLeft from "../../assets/img/icones/icon-left.png"
import btnsImgRight from "../../assets/img/icones/icon-right.png"

import mineImgIrien from "../../assets/img/characters/Irien-home.png"
import mineImgAsrien from "../../assets/img/characters/Asrien-home.png"

import imgKarynny from "../../assets/img/characters/Karynh.png"

const WordPage = () =>
{
  return (
    <WordContainer>
      <LimitContainer>
        <ContainerTitle>
          <h1 className="title">Mundo</h1>
          <img className="title-detail" src={lineDetail} alt="" />
        </ContainerTitle>
        <div>
          <h2>Sitmos</h2>
          <div><img src="" alt="" className="detail" /></div>
          <p>Este é o mundo de fantasia de Teyvat, onde dominam os Sete Elementos. Há muito tempo, as pessoas, através de suas crenças nos Deuses, aprenderam a controlar o poder desses elementos, e transformaram este lugar inóspito em suas moradias. O colapso desse império, há 500 anos, abalou os céus e a terra.</p>
        </div>

        <ContainerSlide>
          <div id="slide">
            <div className="item" style={{ backgroundImage: "url(../../assets/img/places/castelo.png)" }}>
              <div className="content">
                <div className="name">LUNDEV</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  reiciendis.
                </div>
                <button>See more</button>
              </div>
            </div>

            <div className="item" style={{ backgroundImage: "url(../../assets/img/places/castelo.png)" }}>
              <div className="content">
                <div className="name">LUNDEV</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  reiciendis.
                </div>
                <button>See more</button>
              </div>
            </div>

            <div className="item" style={{ backgroundImage: "url(../../assets/img/places/castelo.png)" }}>
              <div className="content">
                <div className="name">LUNDEV</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  reiciendis.
                </div>
                <button>See more</button>
              </div>
            </div>

            <div className="item" style={{ backgroundImage: "url(../../assets/img/places/castelo.png)" }}>
              <div className="content">
                <div className="name">LUNDEV</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  reiciendis.
                </div>
                <button>See more</button>
              </div>
            </div>

            <div className="item" style={{ backgroundImage: "url(../../assets/img/places/castelo.png)" }}>
              <div className="content">
                <div className="name">LUNDEV</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  reiciendis.
                </div>
                <button>See more</button>
              </div>
            </div>

            <div className="item" style={{ backgroundImage: "url(../../assets/img/places/castelo.png)" }}>
              <div className="content">
                <div className="name">LUNDEV</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                  reiciendis.
                </div>
                <button>See more</button>
              </div>
            </div>
          </div>
          <BtnsContainer>
            <button id="prev"><img src={btnsImgLeft} alt="" /></button>
            <button id="next"><img src={btnsImgRight} alt="" /></button>
          </BtnsContainer>
        </ContainerSlide>

      </LimitContainer>
    </WordContainer>
  )
}

export default WordPage