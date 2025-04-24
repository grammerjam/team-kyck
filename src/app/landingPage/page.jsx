import Image from "next/image";

export default function Home() {
  return (
    <div style="background: url(./LandingPageBackground.png) no-repeat center center; height: 100vh; 
        background-size:cover; margin-left:0; 
        margin-right:0;">
            <div style="border:solid white 2px; background:#0a0a0a; justify-self: center; color:white; font-family: sans-serif; position:relative; top:38%;">
                <div style="margin:30px; ">

                    <h1>Do a KickFlip!</h1>
                    <div style="justify-self: center;">
                        <span style="margin-right:100px;">
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style="color: #FC4747; font-weight: lighter; text-decoration: none;">Sign In</a>
                        </span>
                        <span>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style="color: #FC4747; font-weight: lighter; text-decoration: none;">Sign Up</a>
                        </span>
                    </div>
                </div>
            </div>
            <div style="border:solid white 2px; background:#0a0a0a; justify-self: center; color:white; font-family: sans-serif; position:relative; top:40%;">
                <div style="margin:20px; ">
                    This site doesn't do much yet, but it will. Team Kyck is on the job!
                </div>
            </div>
        </div>
  );
}
