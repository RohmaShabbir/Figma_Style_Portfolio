import Image from "next/image";
import Card from "@/app/components/recent-post-card";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">Hi, I am Rohma, Frontend Developer</h1>
              <p className="main-para">
                Hello! I’m Rohma, a 20-year-old with a fresh foundation in
                academics, having recently completed my Intermediate studies.
                I’m currently advancing my technical skills through an intensive
                IT course at the prestigious Governor House, where I’m delving
                into advanced technologies, particularly Next.js and JavaScript.
                With a strong passion for web development, I’m driven to stay at
                the forefront of this dynamic field. I love exploring new
                frameworks and tools that push the boundaries of what’s possible
                on the web!
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <div>
                <Image
                  src="/person.png"
                  width={300}
                  height={300}
                  alt="person"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>Recent Post</h3>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="card-parent">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>Featured Works</h3>
            </div>

            <div className="card-parent">
              <div className="card">
                <Image
                  src="/image1.png"
                  width={245}
                  height={180}
                  alt="image"
                />

                <div className="card-content">
                  <h2>Designing E-Commerce Website</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>Website</p>
                  </div>
                  <p>
                    &quot;I have created an e-commerce shopping website where convenience meets quality. Explore the best products with ease!&quot;
                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/image2.png"
                  width={245}
                  height={180}
                  alt="image"
                />

                <div className="card-content">
                  <h2>Designing Portfolio</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>Personal Portfolio</p>
                  </div>
                  <p>
                    &quot;For my portfolio website, I showcase my skills, projects, 
                    and passion for web development. It&apos;s a reflection of my journey and creativity!&quot;
                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/image3.png"
                  width={245}
                  height={180}
                  alt="image"
                />

                <div className="card-content">
                  <h2>Designing SignUp Form</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>SignUp Form</p>
                  </div>
                  <p>
                    &quot;I have created a sleek and responsive signup and signin 
                    form using HTML and CSS, blending functionality with modern design!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
