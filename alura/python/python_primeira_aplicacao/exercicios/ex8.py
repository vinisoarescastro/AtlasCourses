x = float(input('Digite a coordenada x: '))
y = float(input('Digite a coordenada y: '))

if x > 0 and y > 0: 
    print(f'O ponto está no PRIMEIRO QUADRANTE. Coordenadas: X:{x};Y:{y}')
elif x < 0 and y > 0:
    print(f'O ponto está no SEGUNDO QUADRANTE. Coordenadas: X:{x};Y:{y}')
elif x < 0 and y < 0:
    print(f'O ponto está no TERCEIRO QUADRANTE. Coordenadas: X:{x};Y:{y}')
elif x > 0 and y < 0:
    print(f'O ponto está no QUARTO QUADRANTE. Coordenadas: X:{x};Y:{y}')
else:
    print(f'O ponto está localizado sobre um eixo ou na ORIGEM. Coordenadas: X:{x};Y:{y}')

