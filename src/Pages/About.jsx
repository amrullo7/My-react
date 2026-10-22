import React from 'react'
import ava from "../Layout/img//Ellipse 65.png"
import star from "../Layout/img///Group 17 (1).png"

import arrow from "../Layout/img/ChevronDownMinor 1.png";
const About = () => {
  return (
    <div>
       <div className="flex flex-col gap-[25px] mt-[50px] items-center mt-[70px]">
          <h1 className="text-[36px] font-bold text-center">
            Ищите и находите подходящую работу среди  <br />
            <span className="text-[#1DBF73]">10,000+</span> проектов и покажите на что Вы способны!
          </h1>
          <div className="flex justify-between p-[15px] rounded-[50px] items-center bg-[#F2F0FE] w-[532px]">
            <p>Что нужно сделать?</p>
            <button className="text-white bg-[#FBA457] rounded-[50px] w-[124px] text-[16px] h-[40px]">
              Найти
            </button>
          </div>
          <div className="w-[620px]  flex items-center flex-wrap justify-center  gap-[15px]">
            <p className="text-[16px] ">Тексты и переводы</p>
            <p className="text-[16px] ">Разработка</p>
            <p className="text-[16px] ">Дизайн</p>
            <p className="text-[16px] "> Аудио, видео монтаж </p>
            <p className="text-[16px] ">SEO и оптимизация</p>
            <p className="text-[16px] ">Бизнес и жизнь </p>
            <p className="text-[16px] ">Соцсети и реклама </p>
            <button className="text-[#FBA457] border w-[148px] border-[#FBA457] rounded-[50px] h-[40px] ">
              Все категории
            </button>
          </div>
          <p className='font-semibold text-[24px]'>Ниже все заказы по  <span className="text-[#1DBF73]">дизайну</span></p>
          <img src={arrow} alt="" />
        </div>

        <div className="bg-[#F6FAFD] mt-[120px] pt-[70px]">
          <div className="flex justify-center gap-[400px]">
            <p className='font-bold'>65 проектов по дизайну</p>
            <div className="flex justify-center gap-[50px]">
              <p>Минимальная цена</p>
              <p>—</p>
              <p>Максимальная цена</p>
              <p className='font-bold'>По возрастанию цены</p>
            </div>
          </div>
          <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className="flex justify-center mt-[50px]">
           <div className="w-[1220px] h-[210px]  border border-[#F2F0FE] rounded-[12px] ">
            <div className="p-[20px]">
              <div className="flex justify-between">
                <h1 className='text-[24px] font-bold'>Нужно сделать Дизайн сайта по тематике авто</h1>
                <h1 className='text-[24px] font-bold text-[#1DBF73]'>Бюджет: 50 000 тенге</h1>
              
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[20px]">
                  <img src={ava} alt="" />
                  <div className="felx flex-col ">
                    <p>Екатерина Иванова</p>
                    <p>Размещено проектов на бирже: 25</p>
                    <div className="flex gap-[80px]">  
                      <img src={star} alt="" />
                      <p className='font-bold'>15 отзывов</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-betweenn gap-[58px]">
                  <p>4 часа 28 минут назад</p>
                  <p>Предложений: 50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
           <div className="flex justify-center mt-[50px] pb-[70px]">
            <button className='text-green-500 border border-green-500 w-[188px] h-[45px] rounded-[45px]'>Загрузить еще</button>
           </div>

        </div>
    </div>
  )
}

export default About