import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"
import Greenl8SiteFrame2 from "./Greenl8SiteFrame2"
import YouTube2 from "./YouTube2"

export default function Services({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <div className={styles["div-17"]}>
        <div className={styles["div-18"]}>
          <nav className={styles["site-navigation"]}>
            <a className={styles["greenl8-studio-logo"]} href="./">
              <div className={styles["div-4"]}>
                <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/F4BRjXi4dsrFHGhgoSNSsLRcE.png?scale-down-to=512&width=1672&height=941"} alt="" />
              </div>
            </a>
            <div className={styles["primary-links"]}>
              <div className={styles["work"]}>
                <div className={styles["p"]}>
                  <a className={styles["a"]} href="./work">{slots[1] ?? "Work"}</a>
                </div>
              </div>
              <div className={styles["services"]}>
                <div className={styles["p-2"]}>
                  <a className={styles["a-3"]} href="./services">{slots[2] ?? "Services"}</a>
                </div>
              </div>
              <div className={styles["about"]}>
                <div className={styles["p-3"]}>
                  <a className={styles["a"]} href="./about">{slots[3] ?? "About"}</a>
                </div>
              </div>
            </div>
            <a className={styles["start-a-project"]} href="./start-a-project">
              <div className={styles["div-5"]}>
                <div className={styles["label"]}>
                  <p className={styles["p-4"]}>{slots[4] ?? "Start a project"}</p>
                </div>
              </div>
            </a>
          </nav>
          <div className={styles["div-14"]}>
            <section className={styles["services-introduction"]}>
              <div className={styles["eyebrow"]}>
                <p className={styles["p-9"]}>{slots[5] ?? "WHAT GREENL8 BUILDS"}</p>
              </div>
              <div className={styles["div-19"]}>
                <div className={styles["heading-3"]}>
                  <h1 className={styles["h1-3"]}>{slots[6] ?? "Product communication systems for software that needs to be understood."}</h1>
                </div>
              </div>
              <div className={styles["introduction-2"]}>
                <p className={styles["p-22"]}>{slots[7] ?? "Greenl8 combines product understanding, creative direction and creative technology to shape the message, narrative and visual system around complex software."}</p>
              </div>
            </section>
            <section className={styles["service-systems"]}>
              <div className={styles["explain"]}>
                <div className={styles["div-19"]}>
                  <div className={styles["index-5"]}>
                    <p className={styles["p-23"]}>{slots[8] ?? "EXPLAIN"}</p>
                  </div>
                </div>
                <div className={styles["content-2"]}>
                  <div className={styles["title-3"]}>
                    <h3 className={styles["h3-3"]}>{slots[9] ?? "Product Communication & Explainer Systems"}</h3>
                  </div>
                  <div className={styles["tagline"]}>
                    <p className={styles["p-24"]}>{slots[10] ?? "Make complex products easier to understand."}</p>
                  </div>
                  <div className={styles["description-5"]}>
                    <p className={styles["p-25"]}>{slots[11] ?? "We shape the message, narrative and visual approach around what your audience actually needs to understand, then build the right set of assets to communicate it clearly."}</p>
                  </div>
                  <div className={styles["best-for"]}>
                    <p className={styles["p-26"]}>{slots[12] ?? "Best for: homepages, product pages, sales, customer education, investor communication, campaigns and complex technical propositions."}</p>
                  </div>
                </div>
              </div>
              <div className={styles["explain"]}>
                <div className={styles["div-19"]}>
                  <div className={styles["index-5"]}>
                    <p className={styles["p-23"]}>{slots[13] ?? "LAUNCH"}</p>
                  </div>
                </div>
                <div className={styles["content-2"]}>
                  <div className={styles["title-3"]}>
                    <h3 className={styles["h3-3"]}>{slots[14] ?? "Product Launch Systems"}</h3>
                  </div>
                  <div className={styles["tagline"]}>
                    <p className={styles["p-24"]}>{slots[15] ?? "Turn a release into a coherent launch."}</p>
                  </div>
                  <div className={styles["description-5"]}>
                    <p className={styles["p-25"]}>{slots[16] ?? "We create the narrative, creative direction and launch-ready visual system around new products and features, from the hero piece to the supporting product, web and campaign assets around it."}</p>
                  </div>
                  <div className={styles["best-for"]}>
                    <p className={styles["p-26"]}>{slots[17] ?? "Best for: product launches, feature releases, launch pages, Product Hunt, events, LinkedIn, email, sales enablement and paid campaigns."}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={styles["div-8"]} />
          <div className={styles["div-9"]} />
        </div>
        <Greenl8SiteFrame2 slots={[]} />
      </div>
      <div className={styles["div-10"]} />
      <div className={styles["div-11"]}>
        <span className={styles["span"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button-2"]}>
          <SvgGraphic className={styles["svg-2"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"79\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"80\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe-4"]} />
    </>
  )
}
