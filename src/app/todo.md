## Make a version of the slider closer to the design

[design] (https://dribbble.com/shots/11802881-M-Editorial-Website-Wishlist-Animation)

- [x] build slider component
- [x] increases width and height when hovering, the other boxes react
- [ ] horizontal sroll
  - [ ] measure slider width
  - [ ] set height with the slider width (div.style.height = `${width}px`)


+ desable scrollbar
  ``
  body::-webkit-scrollbar {
display: none;
  }
``

### mx-auto
Si se quita mx-auto del primer div (flex gap-x2 px2) los 7 divs ([...Array(7).keys()].map())
no toman el width establecido w-60 (15rem=240px)

- mx-auto afecta el ancho disponible para los elementos 
  secundarios dentro de un contenedor flexbox

### Problem
- [ ] increases width and height when hovering, the other boxes react

### research the possible solutions
- [framer motion geture](https://www.framer.com/motion/gestures/#hover)

El gesto hover detecta cuando un puntero pasa por encima de un componente
o lo abandona.
whileHover: VariantLabels | TargetAndTransition

```
<motion.div whileHover={{ scale: 1.2 }} />
```
Callbacks:
- onHoverStart(event, info): void
- onHoverEnd(event, info): void

Easing
Especifican la tasa de cambio de un parametro a lo largo del tiempo.
- easeInOutQuart: cubic-bezier(0.76, 0, 0.24, 1) 0.5
- ease: [0, 0.71, 0.2, 1.01]

Transition
Como se animan los valores de un estado a otro
- Transiciones especificas para cada valor
```
  transition={{
    ease: "linear"
    duration: 2,
    x: { duration: 1 }
  }}
```

- type: tipo de animacion a usar
  + tween
    intercalar/interpolacion
  + spring
    Valor por defecto para valores fisicos como x, y, scale, rotate.
    Duracion maxima de 10 segundos. 
    + bounce
      determina el rebote de una animacion spring, 0 si rebote y 1 extremadamente reboton

    La duracion y bounce se anulan si se ajustan: sniffness(rigidez), damping(amortiguacion)
    o mass (masa)
  + Inertia

- damping: permite controlar la suavidad de la animacion. Un valor bajo como 10
  permitira que la animacion se mueva hacia atras y hacia delante unas cuantas veces
  antes de detenerse. Un valor alto como 300 detendra la animacion rapidamente sin ningun
  tipo de osicilacion

- mass: masa del objeto en movimiento. A mayor masa, mas lento sera el movimiento del objeto
  Mayor masa = movimiento lento del objeto
  Mayor masa = animacion mas lenta

- sniffness: ajustar brusquedad del movimiento inicial.
  valor alto = salto inicial mas pronunciado
  valor bajo = inicio mas suaeve


Controlar precision y suavidad del final de la animacion
Ajustar estos valores para controlar
- restSpeed: velocidad minima absolute que debe mantener una animacion para seguir moviendose
- restDelta: distancia minima absoluta que debe mantener una animacion para seguir moviendose

### validate the solutions
- what worked well:
  - aspect-square, whileHover change width, transition: type="spring", salto inicial pronunciado
  sniffness=220 damping moderadamente bajo = 38

***
***

### horizontal scroll
1. measure a div on react

### research the possible solutions
```
  const sliderRef = useRef();

  useEffect(() => {
    const slider = sliderRef.current;
    const { width } = slider.getBoundingClientRect();

    document.body.style.height = `${width - (window.innerWidth - window.innerHeight)}px`;

    document.addEventListener("scroll", function() {
      console.log(window.scrollY);
      slider.style.transform = `translateX(-${window.scrollY}px)`;
    })
  }, [])

  return (
    <div className="flex gap-x-2 px-2 mx-auto items-end" ref={sliderRef}>
```
### validate the solutions
- what worked well:
- what didn't work:

