import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"
import Greenl8SiteFrame2 from "./Greenl8SiteFrame2"
import YouTube2 from "./YouTube2"

export default function Work({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <div className={styles["div-12"]}>
        <div className={styles["div-13"]}>
          <nav className={styles["site-navigation"]}>
            <a className={styles["greenl8-studio-logo"]} href="./">
              <div className={styles["div-4"]}>
                <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/F4BRjXi4dsrFHGhgoSNSsLRcE.png?scale-down-to=512&width=1672&height=941"} alt="" />
              </div>
            </a>
            <div className={styles["primary-links"]}>
              <div className={styles["work"]}>
                <div className={styles["p"]}>
                  <a className={styles["a-3"]} href="./work">{slots[1] ?? "Work"}</a>
                </div>
              </div>
              <div className={styles["services"]}>
                <div className={styles["p-2"]}>
                  <a className={styles["a"]} href="./services">{slots[2] ?? "Services"}</a>
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
            <section className={styles["work-introduction"]}>
              <div className={styles["eyebrow"]}>
                <p className={styles["p-9"]}>{slots[5] ?? "SELECTED WORK"}</p>
              </div>
              <div className={styles["heading-2"]}>
                <h1 className={styles["h1-2"]}>{slots[6] ?? "Clear product communication, built for the places software needs to be understood."}</h1>
              </div>
              <div className={styles["introduction"]}>
                <p className={styles["p-17"]}>{slots[7] ?? "Every Greenl8 project starts with the communication problem, then develops the right visual and technical system around it. The result can extend across launch films, explainers, product pages, interactive demonstrations and reusable motion systems."}</p>
              </div>
            </section>
            <section className={styles["work-systems"]}>
              <div className={styles["explainer-system"]}>
                <div className={styles["visual-system"]}>
                  <div className={styles["div-15"]}>
                    <YouTube2 slots={[]} />
                  </div>
                  <div className={styles["index-3"]}>
                    <p className={styles["p-10"]}>{slots[8] ?? "EXPLAIN"}</p>
                  </div>
                </div>
                <div className={styles["content"]}>
                  <div className={styles["copy"]}>
                    <div className={styles["title-2"]}>
                      <h3 className={styles["h3-2"]}>{slots[9] ?? "Product communication & explainer systems"}</h3>
                    </div>
                    <div className={styles["description-4"]}>
                      <p className={styles["p-18"]}>{slots[10] ?? "Turn complex software into a clear story and the assets needed to communicate it."}</p>
                    </div>
                  </div>
                  <div className={styles["link"]}>
                    <div className={styles["p-19"]}>
                      <a className={styles["a-2"]} href="./services">{slots[11] ?? "Explore Explain →"}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["explainer-system"]}>
                <div className={styles["visual-system-2"]}>
                  <div className={styles["div-16"]}>
                    <YouTube2 slots={[]} />
                  </div>
                  <div className={styles["index-3"]}>
                    <p className={styles["p-10"]}>{slots[12] ?? "LAUNCH"}</p>
                  </div>
                </div>
                <div className={styles["content"]}>
                  <div className={styles["copy"]}>
                    <div className={styles["title-2"]}>
                      <h3 className={styles["h3-2"]}>{slots[13] ?? "Product launch systems"}</h3>
                    </div>
                    <div className={styles["description-4"]}>
                      <p className={styles["p-18"]}>{slots[14] ?? "Build one coherent creative system around a new product or feature and extend it across the launch."}</p>
                    </div>
                  </div>
                  <div className={styles["link-2"]}>
                    <div className={styles["p-20"]}>
                      <a className={styles["a-2"]} href="./services">{slots[15] ?? "Explore Launch →"}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["explainer-system"]}>
                <div className={styles["video-preview"]}>
                  <div className={styles["div-16"]}>
                    <YouTube2 slots={[]} />
                  </div>
                  <div className={styles["index-4"]}>
                    <p className={styles["p-14"]}>{slots[16] ?? "EXPLAIN (example 2)"}</p>
                  </div>
                </div>
                <div className={styles["content"]}>
                  <div className={styles["copy-2"]}>
                    <div className={styles["label-5"]}>
                      <p className={styles["p-21"]}>{slots[17] ?? "VISIONFLOW"}</p>
                    </div>
                    <div className={styles["title-2"]}>
                      <h3 className={styles["h3-2"]}>{slots[18] ?? "SmartTracker explainer"}</h3>
                    </div>
                    <div className={styles["description-4"]}>
                      <p className={styles["p-18"]}>{slots[19] ?? "A product explainer focused on making a specific software capability easy to understand in context."}</p>
                    </div>
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
          <SvgGraphic className={styles["svg-2"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"100\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"101\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe-4"]} />
    </>
  )
}
