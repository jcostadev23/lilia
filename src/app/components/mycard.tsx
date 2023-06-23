  import ProfilePicture from "./myprofilepic";
   
  export default function MyCard() {
    return (
        <div className="bg-white dark:bg-slate-300 shadow-lg rounded-lg p-4 sm:p-8">
            <ProfilePicture/>
            <div className="mt-4 sm:mt-8 mb-4 sm:mb-16 text-lg sm:text-2xl text-center dark:text-black">
              <p>
                  Olá, chamo-me Lília Dionísio!<br/>
                  Desde muito pequena que sempre fui apaixonada por Maquilhagem, sempre admirei quem gosta de se maquilhar, 
                  admiro todas as que seguiram seus sonhos e se tornaram profissionais, 
                  Um dia queria eu ser como elas , nunca segui meu sonho por medo de Falhar.<br/>
                  Durante muito tempo a Maquilhagem foi meu Refúgio, minha luz no fim do Túnel.<br/>
                  Em dias tristes e obscuros, me maquilhar apenas para tirar fotos era o que me restava, e acredite, me fazia e faz tão bem!<br/>
                  Então acredito que a Maquilhagem vai muito além da beleza, superficialidade ou estética, é um manifesto de autoestima.<br/>
                  A autoestima nos afasta dos medos. Sinto que uma das minhas missões, é fazer isso, fazer o que mais gostamos, por Amor, por Prazer!
              </p>
            </div>
       </div>
    );
  }