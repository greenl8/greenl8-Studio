import styles from "./styles.module.css"
import States from "./States"
import { SvgGraphic } from "./RichText"
import Greenl8SiteFrame2 from "./Greenl8SiteFrame2"
import YouTube2 from "./YouTube2"

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <div className={styles["div-2"]}>
        <div className={styles["div-3"]}>
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
          <div className={styles["div-6"]}>
            <section className={styles["hero"]}>
              <div className={styles["hero-copy"]}>
                <div className={styles["studio-positioning"]}>
                  <p className={styles["p-5"]}>{slots[5] ?? "PRODUCT COMMUNICATION STUDIO"}</p>
                </div>
                <div className={styles["hero-headline"]}>
                  <h1 className={styles["h1"]}>{slots[6] ?? "Complex software, clearly communicated."}</h1>
                </div>
                <div className={styles["hero-supporting-copy"]}>
                  <p className={styles["p-6"]}>{slots[7] ?? "Greenl8 helps B2B SaaS, AI and software companies explain complex products, launch new capabilities and show how their technology works through product communication built across video, motion, web and interactive experiences."}</p>
                </div>
                <div className={styles["hero-actions"]}>
                  <a className={styles["start-a-project-2"]} href="./start-a-project">
                    <div className={styles["label-2"]}>
                      <p className={styles["p-7"]}>{slots[8] ?? "Start a project"}</p>
                    </div>
                  </a>
                  <a className={styles["view-work"]} href="./work">
                    <div className={styles["label-3"]}>
                      <p className={styles["p-8"]}>{slots[9] ?? "View our work"}</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section className={styles["selected-work"]}>
              <div className={styles["section-heading"]}>
                <div className={styles["heading-group"]}>
                  <div className={styles["eyebrow"]}>
                    <p className={styles["p-9"]}>{slots[10] ?? "PRODUCT COMMUNICATION SYSTEMS"}</p>
                  </div>
                  <div className={styles["heading"]}>
                    <h2 className={styles["h2"]}>{slots[11] ?? "More than a single asset."}</h2>
                  </div>
                </div>
              </div>
              <div className={styles["project-showcases"]}>
                <div className={styles["product-explainer-showcase"]}>
                  <div className={styles["motion-preview"]}>
                    <div className={styles["div-7"]}>
                      <States
                        a={<>
                          <article className={styles["article-2"]}>
                            <img className={styles["img-2"]} src="https://i.ytimg.com/vi_webp/1WT50xBONnI/maxresdefault.webp" alt="" />
                            <div className={styles["iframe-2"]} />
                            <button className={styles["button"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 68 48\" width=\"100%\" data-f2c-idx=\"55\"><path d=\"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z\" fill=\"#212121\" fill-opacity=\"0.8\" style=\"transition:fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)\" data-f2c-idx=\"56\"></path><path d=\"M 45,24 27,14 27,34\" fill=\"#fff\" data-f2c-idx=\"57\"></path></svg>"} />
                            </button>
                          </article>
                        </>}
                        b={<>
                          <article className={styles["article-3"]}>
                            <img className={styles["img-3"]} src="https://i.ytimg.com/vi_webp/1WT50xBONnI/maxresdefault.webp" alt="" />
                            <div className={styles["iframe-3"]} />
                          </article>
                        </>}
                      />
                    </div>
                    <div className={styles["index"]}>
                      <p className={styles["p-10"]}>{slots[12] ?? "EXPLAIN"}</p>
                    </div>
                  </div>
                  <div className={styles["project-summary"]}>
                    <div className={styles["project-detail"]}>
                      <div className={styles["title"]}>
                        <h3 className={styles["h3"]}>{slots[13] ?? "Product communication & explainer systems"}</h3>
                      </div>
                      <div className={styles["description"]}>
                        <p className={styles["p-11"]}>{slots[14] ?? "Make complex software easier to understand with the message, narrative and visual system that the moment requires."}</p>
                      </div>
                    </div>
                    <div className={styles["view-project"]}>
                      <div className={styles["p-12"]}>
                        <a className={styles["a-2"]} href="./work/visionflow">{slots[15] ?? "View project →"}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["product-explainer-showcase"]}>
                  <div className={styles["motion-preview-2"]}>
                    <div className={styles["div-7"]}>
                      <States
                        a={<>
                          <article className={styles["article-2"]}>
                            <img className={styles["img-2"]} src="https://i.ytimg.com/vi_webp/nA2zms1a-x8/maxresdefault.webp" alt="" />
                            <div className={styles["iframe-2"]} />
                            <button className={styles["button"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 68 48\" width=\"100%\" data-f2c-idx=\"77\"><path d=\"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z\" fill=\"#212121\" fill-opacity=\"0.8\" style=\"transition:fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)\" data-f2c-idx=\"78\"></path><path d=\"M 45,24 27,14 27,34\" fill=\"#fff\" data-f2c-idx=\"79\"></path></svg>"} />
                            </button>
                          </article>
                        </>}
                        b={<>
                          <article className={styles["article-3"]}>
                            <img className={styles["img-3"]} src="https://i.ytimg.com/vi_webp/nA2zms1a-x8/maxresdefault.webp" alt="" />
                            <div className={styles["iframe-3"]} />
                          </article>
                        </>}
                      />
                    </div>
                    <div className={styles["index"]}>
                      <p className={styles["p-10"]}>{slots[16] ?? "LAUNCH"}</p>
                    </div>
                  </div>
                  <div className={styles["project-summary"]}>
                    <div className={styles["project-detail-2"]}>
                      <div className={styles["title"]}>
                        <h3 className={styles["h3"]}>{slots[17] ?? "Product launch systems"}</h3>
                      </div>
                      <div className={styles["description-2"]}>
                        <p className={styles["p-13"]}>{slots[18] ?? "Turn a release into a coherent launch, from the hero piece to the product, web and campaign assets around it."}</p>
                      </div>
                    </div>
                    <div className={styles["view-project"]}>
                      <div className={styles["p-12"]}>
                        <a className={styles["a-2"]} href="./work/nexora">{slots[19] ?? "View project →"}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["product-explainer-showcase"]}>
                  <div className={styles["motion-preview-3"]}>
                    <div className={styles["div-7"]}>
                      <States
                        a={<>
                          <article className={styles["article-2"]}>
                            <img className={styles["img-2"]} src="https://i.ytimg.com/vi_webp/n321h8PH0mA/maxresdefault.webp" alt="" />
                            <div className={styles["iframe-2"]} />
                            <button className={styles["button"]}>
                              <SvgGraphic className={styles["svg"]} html={"<svg height=\"100%\" version=\"1.1\" viewBox=\"0 0 68 48\" width=\"100%\" data-f2c-idx=\"99\"><path d=\"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z\" fill=\"#212121\" fill-opacity=\"0.8\" style=\"transition:fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)\" data-f2c-idx=\"100\"></path><path d=\"M 45,24 27,14 27,34\" fill=\"#fff\" data-f2c-idx=\"101\"></path></svg>"} />
                            </button>
                          </article>
                        </>}
                        b={<>
                          <article className={styles["article-3"]}>
                            <img className={styles["img-3"]} src="https://i.ytimg.com/vi_webp/n321h8PH0mA/maxresdefault.webp" alt="" />
                            <div className={styles["iframe-3"]} />
                          </article>
                        </>}
                      />
                    </div>
                    <div className={styles["index-2"]}>
                      <p className={styles["p-14"]}>{slots[20] ?? "Explain (example 2)"}</p>
                    </div>
                  </div>
                  <div className={styles["project-summary"]}>
                    <div className={styles["project-detail-3"]}>
                      <div className={styles["label-4"]}>
                        <p className={styles["p-15"]}>{slots[21] ?? "VISIONFLOW"}</p>
                      </div>
                      <div className={styles["title"]}>
                        <h3 className={styles["h3"]}>{slots[22] ?? "SmartTracker explainer"}</h3>
                      </div>
                      <div className={styles["description-3"]}>
                        <p className={styles["p-16"]}>{slots[23] ?? "A focused product explainer that makes an important software capability easy to understand in context."}</p>
                      </div>
                    </div>
                    <div className={styles["view-project"]}>
                      <div className={styles["p-12"]}>
                        <a className={styles["a-2"]} href="./work/smart-tracking">{slots[24] ?? "View project →"}</a>
                      </div>
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
          <SvgGraphic className={styles["svg-2"]} html={"<svg role=\"presentation\" xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"136\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"137\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe-4"]} />
    </>
  )
}
