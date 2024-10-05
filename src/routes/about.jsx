import React, { StrictMode } from "react";

export default function About() {
    return (
        <StrictMode>
            <body>
                <main>
                    <div>
                        <div>
                            <h3>About</h3>

                            On weekend meetings, members take mock or official math contests, attend lectures on various topics by
                            our veteran math team members, or listen to guest speakers. Ultimately, however, improvement comes from
                            <em>solving lots of problems</em> in your free time! We encourage members to review past contest
                            problems that they were unable to solve in the time frame, and attempt problem sets that accompany our
                            lecture notes. We bring these resources to you on this website through the links below (or in the
                            dropdown menu "Resources" above in the navigation bar).
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <a href="/info"><img src="images/maa_amc.png" /></a>
                                        </div>
                                        <div>

                                            <span>Contest Preparation</span>
                                            <p>This page will provide a wide assortment of links to outside resources that students
                                                can also utilize in their preparation for the main sequence of math contests by the
                                                Mathematical Association of America (MAA): AMC/AIME/USA(J)MO.</p>
                                        </div>
                                        <div>
                                            <a href="/info">Visit</a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <a href="/archive"><img src="images/pile_of_math_papers.jpg" /></a>
                                        </div>
                                        <div>

                                            <span>Archive</span>
                                            <p>This page contains links to .pdf files of lecture notes (with problem sets) that our
                                                veteran math team members wrote and compiled, previously administered mock contests
                                                or released contest papers from outside organizations, and solutions to problems.
                                                <span>All math team members should check this page
                                                    regularly for newly released documents during downtime.</span></p>
                                        </div>
                                        <div>
                                            <a href="/archive">Visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                        {/* <!--  Scripts-->
                <!-- The core Firebase JS SDK is always required and must be listed first --> */}
                        <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js"></script>
                        <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-database.js"></script>
                        <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-storage.js"></script>
                        <script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-auth.js"></script>
                        <script>
                            {/* // Your web app's Firebase configuration */}
                            {/* const firebaseConfig = {
                                apiKey: "AIzaSyBH_Id1x-z7z4YD1GJi4jv16qMiHRMWZAw",
                                authDomain: "bca-math-team.firebaseapp.com",
                                databaseURL: "https://bca-math-team.firebaseio.com",
                                projectId: "bca-math-team",
                                storageBucket: "bca-math-team.appspot.com",
                                messagingSenderId: "814077710413",
                                appId: "1:814077710413:web:8ab93e1779063770634c04",
                                measurementId: "G-BE9QNCVW6Q" */}
                            {/* }; */}
                            {/* // Initialize Firebase */}
                            firebase.initializeApp(firebaseConfig);
                        </script>
                        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                        <script src="/js/init.js"></script>
                        </main>
            </body>
                </StrictMode>
                );
}

