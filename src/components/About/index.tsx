export default function About() {

  return (
    <div className="h-[70vh] flex justify-between px-[8rem] w-full">
      <div className="w-[40%] flex justify-center">
        <div className="mt-[30px]">
          <img
            src="/img/profile.png"
            alt="Foto Fábio Oliveira"
            width={320}
            className="rounded-[50px] shadow-black shadow-2xl max-w-full max-h-full"
            style={{ minWidth: '100px', minHeight: '100px' }}
          />
        </div>
      </div>
      <div className="w-[45%]">
        <h1 className="mb-3 mt-[30px] font-medium font-chakra-petch items-center text-[2.5rem] bg-gradient-to-b from-green-600 via-blue-500 to-purple-700 text-transparent bg-clip-text">
          Olá, eu sou Fábio Oliveira
        </h1>
        <p className="font-titillium-web text-justify font-medium text-[1.3rem]">
          Apaixonado por programação desde os 20 anos, quando tive meu primeiro contato, através do Guanabara.
          Estudei no SENAI São Paulo, onde concluí cursos de tecnologia em
          Desenvolvimento Front End e Back End. Também tenho certificação em
          User Experience na FIAP e a certificação AWS Academy Cloud Foundations.

          Atualmente, sou Front End Engineer na Germinare, onde lidero grandes
          projetos que promovem meu crescimento profissional.

          Nas horas vagas, adoro jogar video games, codar e jogar poker.
          Sou um eterno estudante, sempre em busca de novos conhecimentos e melhorias contínuas.
        </p>
      </div>
    </div>
  )
}