import Seo from "../components/Seo";
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Seo title="Home" />
        <div className={styles.description}>
          <p>iconic brand&nbsp;</p>
          <code className={styles.code}>::: United Culture brand :::</code>
        </div>
        <div className={styles.center}>
          <h1 className={styles.logo} width={280} height={37}>HOMI Korea</h1>
          <p className={styles.website}>www.homihomi.co.kr</p>
        </div>

        <div className={styles.grid}>
          <a href="/category" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3 className={inter.className}>
              끼 (Talent) <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              한국을 대표하는 음악(전통, 현대), 미술, 한국적 공예(무형문화재, ...
            </p>
          </a>
          <a href="/category" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3 className={inter.className}>
              꾀 (Brain) <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              우리나라만이 가진 독특하고 우수한 발명품과 기술 등 세계화와 확장 ...
            </p>
          </a>
          <a href="/category" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3 className={inter.className}>
              꼴 (Look) <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              한국의 영화, 드라마, 웹툰, 전시, 축제, 여행, 다큐, 템플스테이 등 ...
            </p>
          </a>
          <a href="/category" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3 className={inter.className}>
              끈 (Network) <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              관련 기관, 단체, 협회, 기업 등의 홍보와 마케팅의 유기적 관계를 통 ...
            </p>
          </a>
          <a href="/category" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3 className={inter.className}>
              꿈 (Dream) <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              출판, 교육, 학회, 문필(소설, 수필) 등 대한민국의 미래를 짊어질 미 ...
            </p>
          </a>
          <a href="/category" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3 className={inter.className}>
              깡 (Brave) <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              스포츠, 군사, 무예, e-sports, 씨름 등 한국의 무예와 군사, 스포츠 ...
            </p>
          </a>
          <a href="/category" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3 className={inter.className}>
              꾼 (Player) <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              한국의 농업과 축산, 수산, 장사, 중소기업 등 중소강국으로, 소상공 ...
            </p>
          </a>
          <a href="/category" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h3 className={inter.className}>
              꿀 (Honey) <span>-&gt;</span>
            </h3>
            <p className={inter.className}>
              한국의 5대 발효음식은 된장, 간장, 고추장, 김장, 젓갈이다. 여기에 ...
            </p>
          </a>
        </div>
    </>
  )
}
