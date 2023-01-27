import Image from "next/image";
import Button from "../../components/button/Button";
import section1 from "./assets/section1.jpeg";
import computer from './assets/computer.png';
import chart from './assets/chart.png';
import infinity from './assets/infinity.png';
import time from './assets/time.png';
import section4 from './assets/section4.jpeg';
import schema from './assets/schema.png';
import item1 from './assets/item1.svg'
import item2 from './assets/item2.svg';
import item3 from './assets/item3.svg';
import item4 from './assets/item4.svg';

const Index = () => {
  return (
    <div className={'app-landing'}>
      <header className={'app-header'}>
        <h1 className={'app-header-icon'}>IMILORE</h1>
        <div className={'app-header-buttons'}>
          <a href={'https://dashboard.imilore.tech/dashborad'}>
            <Button>
              DEMO
            </Button>
          </a>
          <a href={'https://dashboard.imilore.tech/?popup=auth'}>
            <Button>
              LOG IN
            </Button>
          </a>
        </div>
      </header>
      <section className={'section-1'}>
        <Image alt={'network'} src={section1} className={'section-1-image'}/>
        <h1 className={'section-1-header'}>
          IMILORE
        </h1>
        <p className={'section-1-desc'}>
          Сервис предиктивного <br/> анализа сбоев <br /> серверного оборудования <br /> на основе BIG DATA
        </p>
      </section>
      <section className={'section-2'}>
        <h1 className={'section-2-header'}>
          Какие проблемы мы устраняем?
        </h1>
        <div className={'section-2-items'}>
          <div className={'section-2-item'}>
            <Image src={infinity} alt={'infinity'} className={'section-2-item-image'}/>
            <div className={'section-2-item-desc'}>
              Малоэффективные методы технического обслуживания
            </div>
          </div>
          <div className={'section-2-item'}>
            <Image src={chart} alt={'chart'} className={'section-2-item-image'}/>
            <div className={'section-2-item-desc'}>
              Сложность внедрения прогнозного обслуживания
            </div>
          </div>
          <div className={'section-2-item'}>
            <Image src={computer} alt={'computer'} className={'section-2-item-image'}/>
            <div className={'section-2-item-desc'}>
              Деградация и выход из строя оборудования
            </div>
          </div>
          <div className={'section-2-item'}>
            <Image src={time} alt={'time'} className={'section-2-item-image'}/>
            <div className={'section-2-item-desc'}>
              Отсутствие “умных” решений для анализа состояния накопителей
            </div>
          </div>
        </div>
      </section>
      <section className={'section-3'}>
        <h1 className={'section-3-header'}>
          Наше решение
        </h1>
        <p className={'section-3-desc'}>
          Мы предлагаем сократить ваши затраты
          вызванные сбоями оборудования, автоматизировав
          с помощью нашего приложения предсказание сбоев
          за счет автоматизированного прогнозирования состояний.
        </p>
        <p className={'section-3-desc'}>
          С нашим продуктом вы всегда сможете узнать когда именно что-то пойдет не так.
        </p>
      </section>

      <section className={'section-4'}>
        <Image src={section4} alt={'network'} className={'section-4-image'} />
        <h1 className={'section-4-header'}>
          Зачем использовать именно IMILORE?
        </h1>
        <div className={'section-4-items'}>
          <div className={'section-4-item'}>
            <Image alt={'item1'} src={item1} className={'section-4-item-image'}/>
            <div className={'section-4-item-desc'}>
              Возможность расширения
              кол-ва источников данных
              для увеличения горизонта прогнозирования
            </div>
          </div>
          <div className={'section-4-item'}>
            <Image alt={'item1'} src={item2} className={'section-4-item-image'}/>
            <div className={'section-4-item-desc'}>
              Комплексный анализ параметров системы
            </div>
          </div>
          <div className={'section-4-item'}>
            <Image alt={'item1'} src={item3} className={'section-4-item-image'}/>
            <div className={'section-4-item-desc'}>
              ML-аналитика для выявления отклонений в поведении
            </div>
          </div>
          <div className={'section-4-item'}>
            <Image alt={'item1'} src={item4} className={'section-4-item-image'}/>
            <div className={'section-4-item-desc'}>
              Наличие предобученной
              и оптимизированной модели
            </div>
          </div>
        </div>
      </section>

      <section className={'section-5'}>
        <div className={'section-5-header'}>
          Как это работает?
        </div>
        <Image alt={'schema'} src={schema} className={'section-5-image'}/>
      </section>

      <section className={'section-6'}>
        <div className={'section-6-desc'}>
          Свяжитесь с нами и мы подготовим персональное решение которое подходит именно вам
        </div>
        <div className={'section-6-button'}>
          <a href={'https://dashboard.imilore.tech/?popup=contact'}>
            <Button>
              Написать нам
            </Button>
          </a>
        </div>
      </section>

      <footer className={'section-7'}>
        <div className={'section-7-item'}>
          Контакты
        </div>
        <div className={'section-7-item'}>
          phone
        </div>
        <div className={'section-7-item'}>
          email
        </div>
      </footer>
    </div>
  );
};

export default Index;