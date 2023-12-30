---
layout: "post"
title: "Notación matemática modelos adversarios"
cover: "/assets/development/test.png"
slug: "notación-matemática-modelos-adversarios"
chips:
  - label: "2023-12-17"
    icon: "pi pi-calendar"
  - label: "20 min"
    icon: "pi pi-clock"
authors:
  - id: 0 
    name: "nonodev96"
    image: "/assets/development/avatar.png"
summary: "Notación matemática modelos adversarios"
# https://katex.org/docs/supported.html
# https://jfcere.github.io/ngx-markdown/plugins#katex
---

# Notación matemática modelos adversarios


- Se define Vector como

\begin{equation}
V = [v_{i,j}]_{i=1,...,n, j=1,...,m} 
\end{equation}

- $ R $ is el conjunto de los números reales
- $ Z $ is el conjunto de los números enteros
- $ Z^{+} $ is el conjunto de los números enteros positivos (números naturales)
- $ N $ es la dimensión del ejemplo en el espacio de entrada de una red neuronal feed fordward, este es el espacio $ N $-Dimensional, Real-Valued Column Vector $ R^{N} $
- $ \underline{Z}'$ es la traspuesta por columnas del vector $\underline{z}$, esto es, $\underline{z}'$ es un vector fila
- $ \lt\underline{z},\underline{y}\gt = \underline{z}' \underline{y} = \sum_{j=1}^{N}{z_{i}y_{j}} $ es el producto vectorial $ \underline{z}, \underline{y} \in R^{N} $
- $ T = \lvert X \rvert < \infty $ es el número de ejemplos en el conjunto de datos $X$
- $ K $ es el número finito de clases en $ X $ para el problema de clasificación.



AC - GAN Función Objetivo

$$
L_{S} = E [Log P (S = real | X_{real})] + E [Log P(S = fake | X_{fake}) ]
$$

$$
L_{S} = E [Log P (C = c | X_{real})] + E [Log P(C = c | X_{fake}) ]
$$

$$
D -> max{Lc + Ls}
$$

$$
G -> max{Lc - Ls}
$$
