export default function HistoriaPicurutaPage(){
    return(
        <section className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-6xl text-center mb-12">
            História do Picuruta Salazar
          </h1>

          {/* Fotos do Picuruta */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  Foto Picuruta {i}
                </span>
              </div>
            ))}
          </div>

          {/* Artigo */}
          <article className="max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-6">Quem é Picuruta Salazar</h2>
            <p>
                Carlos Eduardo <span className="font-semibold text-foreground">"Picuruta"</span> Salazar é uma lenda viva do surf brasileiro.
                Nascido em Ubatuba, litoral norte de São Paulo, cresceu entre as ondas de
                Itamambuca e se tornou um dos surfistas mais respeitados do Brasil.
            </p>

            <p>
              Com décadas de experiência nas ondas, Picuruta dedicou sua vida não
              apenas ao esporte, mas também à formação de novos surfistas. Sua
              escola de surf se tornou referência no litoral paulista, formando
              campeões e inspirando gerações.
            </p>
            <p>
              Reconhecido por sua técnica impecável e profundo conhecimento do mar,
              Picuruta é mais do que um surfista — é um educador, mentor e guardião
              da cultura do surf no Brasil.
            </p>
            <p>
              Ao longo de sua carreira, participou de inúmeras competições nacionais
              e internacionais, sempre representando com orgulho suas raízes
              ubatubenses. Sua contribuição para o surf brasileiro é imensurável.
            </p>
          </article>

          {/* Vídeo da história */}
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VIDEO_PICURUTA_AQUI"
              title="Vídeo - História do Picuruta Salazar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    )
}