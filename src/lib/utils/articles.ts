import { SingleArticleResponse } from "@/api/types";
import {
  AffiliationInAuthor,
  AuthorInArticle,
  TArticleType,
} from "@/lib/types/articles";

export const resolveArticleType = (type: TArticleType) => {
  switch (type) {
    case "conference_paper":
      return "Conference Paper";
    case "research_paper":
      return "Research Paper";
    default:
      break;
  }
};

export function formatDate(isoString: string) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const makeAffiliationsTagsFromAuthors = (
  authors: AuthorInArticle[],
): [Record<string, string>, Record<string, AffiliationInAuthor>] => {
  let affiliationAliases: Record<string, string> = {};
  let currentLetter = 97;
  let affiliationsData: Record<string, AffiliationInAuthor> = {};
  authors.forEach(({ affiliations }) => {
    affiliations.forEach((af) => {
      if (!affiliationAliases[af.id]) {
        affiliationAliases[af.id] = String.fromCharCode(currentLetter);
      }
      affiliationsData[af.id] = af;
      currentLetter += 1;
    });
  });
  return [affiliationAliases, affiliationsData];
};

export const parseBlockMathLatex = (
  latex: string,
): { tag: string; cleanLatex: string } => {
  let cleanLatex = latex;
  let tag = "";

  const tagRegex = /\\tag\{([\s\S]*?)\}/;
  const tagMatch = latex.match(tagRegex);

  if (tagMatch && tagMatch[1]) {
    tag = tagMatch[1];
    cleanLatex = latex.replace(tagRegex, "");
  }

  cleanLatex = cleanLatex
    .replace(/\\begin\{equation\*?\}\s*/, "")
    .replace(/\s*\\end\{equation\*?\}/, "");

  cleanLatex = cleanLatex.trim();

  return { tag, cleanLatex };
};

// export const scrollToId = (id: string) => {
//   const element = document.getElementById(id);
//   if (!element) return;
//   const headerOffset = 100;
//   const elementPosition = element.getBoundingClientRect().top;
//   const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//   window.scrollTo({
//     top: offsetPosition,
//     behavior: "smooth",
//   });
// };

// TEMP:

// export const article: SingleArticleResponse = {
//   id: "article-1",
//   title: "Article The First",
//   abstract:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   pages_in_volume: "125",
//   keywords: ["article", "fun"],
//   type: "conference_paper",
//   editorial: true,
//   doi: "https://doi.com/something",
//   received_at: "2025-11-30T00:00:00Z",
//   revised_at: "2025-11-30T00:00:00Z",
//   accepted_at: "2025-11-30T00:00:00Z",
//   published_at: "2025-11-30T00:00:00Z",
//   body: [
//     {
//       type: "funding",
//       content: "The article is funded by Google and Yandex",
//     },
//     {
//       type: "acknowledgement",
//       content:
//         "The great thank you is reffered to Google, Thomas Mathews and Michael Bay for creating this article from scratch",
//     },
//     {
//       type: "section",
//       title: "Introduction",
//       number: "1",
//       content: [
//         {
//           type: "text",
//           content:
//             "Over the past few decades, the development of rigid-body attitude control systems has been instrumental in propelling advancements across a spectrum of fields, including spacecraft, aviation, and robotics. Scholars have delved into a multitude of sophisticated control algorithms tailored for nonlinear attitude control. Notable among these are adaptive control [1], [2], backstepping control [3], [4], inverse optimal control [5], [6], sliding mode control [7], [8], and fault-tolerant control [9], [10]. Despite significant progress, conventional control methodologies often overlook the attitude constraints inherent in real-world applications. There is a burgeoning interest in examining the maneuvering of rigid bodies within specific, scenario-driven constraints. For example, airborne optical telescopes must avoid bright fields of view to prevent damage to their sensitive instruments [11]. Similarly, the orientation of a communication antenna must remain within its beamwidth to sustain a connection with a ground station. These operational constraints on rigid-body attitudes are characterized as attitude constraints. Expanding the constraint region not only limits the permissible attitude range but also complicates the trajectory of attitude maneuvers and the control system’s complexity. In recent years, several researchers have explored the challenge of attitude maneuvering under such constraints. In [12], path planning strategies that chart a rotational trajectory meeting specific criteria are proposed. In contrast, the potential function approach simplifies computations and is amenable to on-board processing. It leverages artificial potential functions to guide the system towards attitude-conforming paths, assigning lower potential energy to the desired attitude and imposing higher potential energy barriers within constrained regions. The exponential obstacle potential function, as introduced by [13], represents multiple attitude constraints based on attitude unit quaternions. Concurrently, [14] developed an attitude stabilizer that adheres to dual constraints of attitude and angular rate, facilitating spacecraft reorientation while accounting for prohibited zones and maximum angular velocities. Additionally, the concept of nullifiable potential functions, complete with a cautionary distance, was proposed by [15] to manage attitude and obstacle-avoidance limitations. The attitude controller presented by [16] represents the spacecraft’s attitude using the SO(3) group, circumventing the singularities and ambiguities associated with unit quaternion and Euler angle representations. Along these lines, [17] proposed an adaptive saturated attitude controller based on SO(3) to achieve consensus and tracking in multi-spacecraft systems under mixed constraints, even with arbitrary initial attitudes. It is important to note that while these studies have successfully managed attitude maneuvers across various regions, they have not considered the impact of actuator faults. Actuator faults, which can diminish controllability or even destabilize a system [18], [19], are often neglected in the context of spacecraft attitude control under multiple constraints. The existing fault-tolerant strategies are typically divided into passive and active approaches [20]. Given the complexity and potential latency of active schemes, this paper focuses on passive fault tolerance. Scholars have proposed diverse strategies, such as theory [21], [22], Lyapunov reconstruction [23], [24], and sliding mode control [25], to achieve fault tolerance. Building on sliding mode techniques, [26] introduced an attitude controller for flexible spacecraft with redundant actuators. Furthermore, an adaptive fault-tolerant approach was employed by [27] to develop a controller that mitigates the effects of actuator faults. Additionally, [28] proposed a data-driven adaptive control method based on supervised learning to accurately predict continuous nonlinear actuator faults and model uncertainties. Lastly, [29] proposed a fault-tolerant attitude control strategy that incorporates both attitude constraints and actuator faults to ensure successful spacecraft maneuvering. However, the literature is scarce regarding the simultaneous consideration of multiple attitude constraints and finite sequential actuator faults in attitude maneuvering. This paper introduces an adaptive fault-tolerant backstepping controller integrated with a potential function, adeptly addressing both challenges. The proposed controller facilitates real-time computation of the fault compensation matrix under actuator faults while ensuring the spacecraft’s attitude adheres to constraints. The system’s asymptotic stabilization is demonstrated through rigorous numerical simulations. The primary contribution of this paper lies in its holistic approach to multiple attitude constraints and finite sequential actuator faults, setting it apart from prior works such as [30], [31]. Unlike these studies, which focus on either attitude constraints or actuator faults in isolation or with limited scope, our method integrates an adaptive fault-tolerant controller based on an artificial potential function for attitude constraints and an adaptive direct compensation mechanism for finite sequential actuator faults. The hybrid attitude potential function presented not only accommodates any initial attitude but also demonstrates superior gradient descent performance compared to [17]. It also effectively minimizes control chattering through the smooth hysteresis loop transition. Additionally, we provide a stability analysis grounded in Lyapunov theory to substantiate the stability of the closed-loop system. The remainder of this paper is organized as follows: Section 2 outlines the kinematics of rigid body attitude using SO(3) representations. The dynamics of attitude under finite sequential actuator faults are then derived. Subsequently, the mixed attitude constraints model is described, and the research problem is stated. Section 3 introduces the potential function for mixed attitude constraints, details the design of the adaptive fault-tolerant backstepping controller, and offers a comprehensive stability analysis. Section 4 presents numerical simulation results that validate the efficacy of our proposed controller. Finally, Section 5 summarizes our conclusions.",
//         },
//       ],
//     },
//     {
//       type: "section",
//       title: "Preliminaries",
//       number: "2",
//       content: [
//         {
//           type: "section",
//           title: "Attitude kinematics",
//           number: "2.1",
//           content: [
//             {
//               type: "text",
//               content:
//                 "Okay, now we will test some mathematics here. For example, this is inline math: $D=b^2-4ac$ if the equation was initialized as $a \\cdot x^2 + b \\cdot x + c = 0$. And this way we can display math in the center of screen: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$ Right now I want to test dollar signs. For example I have 40$. What would you do with 40$? I would actually go to shop and buy flowers to my beatiful mother for those 40 I have. That test went wrong and dollar bills were considered as mathsigns. Lets try escaping: 40\\$ - this one is now escaped. \\$ some text, without formatting \\$ \\$. Now let's test order numbers of equations: $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\tag{sqr}$$ \\begin{equation}\\label{eq:solve} x^2 - 5 x + 6 = 0\\end{equation}\n\n\\begin{equation*}x_1 = \\frac{5 + \\sqrt{25 - 4 \\times 6}}{2} = 3\\end{equation*}\n\n\\begin{equation*}x_2 = \\frac{5 - \\sqrt{25 - 4 \\times 6}}{2} = 2\\end{equation*}\n\nand so we have solved equation \\eqref{eq:solve}",
//             },
//             {
//               type: "text",
//               content: "Another context, \\eqref{eq:solve}",
//             },
//             {
//               data: {
//                 rows: [
//                   {
//                     cells: [
//                       {
//                         data: "Constrained region",
//                         style: {
//                           bold: true,
//                         },
//                       },
//                       {
//                         data: "Direction vector, $x\\in R^3$",
//                         style: {
//                           bold: true,
//                         },
//                       },
//                       {
//                         data: "Angle",
//                         style: {
//                           bold: true,
//                         },
//                       },
//                     ],
//                   },
//                   {
//                     cells: [
//                       {
//                         data: "AFCR 1",
//                         style: {
//                           bold: true,
//                         },
//                       },
//                       {
//                         data: "[0, −1, 0]",
//                       },
//                       {
//                         data: "35°",
//                       },
//                     ],
//                   },
//                   {
//                     cells: [
//                       {
//                         data: "AFCR 2",
//                         style: {
//                           bold: true,
//                         },
//                       },
//                       {
//                         data: "[0.6835, 0.6735, 0.2815]",
//                       },
//                       {
//                         data: "$25^o$",
//                       },
//                     ],
//                   },
//                   {
//                     cells: [
//                       {
//                         data: "AFCR 3",
//                         style: {
//                           bold: true,
//                         },
//                       },
//                       {
//                         data: "[0.3800, 0, 0.9250]",
//                       },
//                       {
//                         data: "$20^o$",
//                       },
//                     ],
//                   },
//                   {
//                     cells: [
//                       {
//                         data: "AMCR 1",
//                         style: {
//                           bold: true,
//                         },
//                       },
//                       {
//                         data: "[−0.8138,0.5485,−0.1922]",
//                       },
//                       {
//                         data: "$20^o$",
//                       },
//                     ],
//                   },
//                 ],
//               },
//               type: "table",
//               title: "Simulation parameters of constrained region.",
//               number: "1",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title: "Illustration of mixed attitude constraints.",
//               number: "1",
//             },
//             {
//               type: "section",
//               title: "Attitude dynamics with finite sequential actuator faults",
//               number: "2.1.1",
//               content: [
//                 {
//                   type: "text",
//                   content: "asd",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       type: "section",
//       title: "Design and stability analysis of the controller",
//       number: "3",
//       content: [
//         {
//           type: "text",
//           content:
//             "In this section, we introduce an approach that employs a potential function to adeptly manage arbitrary initial mixed attitude constraints. Following this, an adaptive compensation strategy is presented to effectively handle finite sequential actuator faults within rigid-body spacecraft. We have designed an arbitrary initial mixed attitude constraints adaptive fault-tolerant controller (AMAC-AFTC), this controller is specifically tailored to accommodate a variety of attitude constraints and to mitigate the effects of finite sequential actuator faults. The schematic representation of the AMAC-AFTC is depicted in Fig. 2. Finally, the Lyapunov stability theorem is utilized to analyze the effectiveness of the proposed controller and its ability to achieve the control objectives presented in Section 2.5.",
//         },
//         {
//           data: {
//             rows: [
//               {
//                 cells: [
//                   {
//                     data: "Constrained region",
//                     style: {
//                       bold: true,
//                     },
//                   },
//                   {
//                     data: "Direction vector, $x\\in R^3$",
//                     style: {
//                       bold: true,
//                     },
//                   },
//                   {
//                     data: "Angle",
//                     style: {
//                       bold: true,
//                     },
//                   },
//                 ],
//               },
//               {
//                 cells: [
//                   {
//                     data: "AFCR 1",
//                     style: {
//                       bold: true,
//                     },
//                   },
//                   {
//                     data: "[0, −1, 0]",
//                   },
//                   {
//                     data: "35°",
//                   },
//                 ],
//               },
//               {
//                 cells: [
//                   {
//                     data: "AFCR 2",
//                     style: {
//                       bold: true,
//                     },
//                   },
//                   {
//                     data: "[0.6835, 0.6735, 0.2815]",
//                   },
//                   {
//                     data: "$25^o$",
//                   },
//                 ],
//               },
//               {
//                 cells: [
//                   {
//                     data: "AFCR 3",
//                     style: {
//                       bold: true,
//                     },
//                   },
//                   {
//                     data: "[0.3800, 0, 0.9250]",
//                   },
//                   {
//                     data: "$20^o$",
//                   },
//                 ],
//               },
//               {
//                 cells: [
//                   {
//                     data: "AMCR 1",
//                     style: {
//                       bold: true,
//                     },
//                   },
//                   {
//                     data: "[−0.8138,0.5485,−0.1922]",
//                   },
//                   {
//                     data: "$20^o$",
//                   },
//                 ],
//               },
//             ],
//           },
//           type: "table",
//           title: "Another table.",
//           number: "2",
//         },
//         {
//           type: "section",
//           title: "Potential function design of attitude constraint",
//           number: "3.1",
//           content: [
//             {
//               type: "text",
//               content:
//                 "A potential function on SO(3) is proposed based on whether the spacecraft’s initial attitude satisfies the mixed attitude constraints Eq. (8) or Eq. (9). The potential function represents the attitude-forbidden regions, while represents the attitude-mandatory regions. The potential function, denoted as, is defined according to the initial attitude, (15) where the mixed constraint potential function is obtained by adding two parts: the forbidden attitude constraint potential function and the mandatory attitude constraint potential function, and then adding one.",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title: "Schematicsss of the AMAC-AFTC.",
//               number: "2",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/2.jpg",
//               title:
//                 "Simulationdsadas results of initial attitude satisfying constraints. In Fig. 3(f) 2D pointing direction trajectory, azimuth is represented on the horizontal axis and pitching angle on the vertical axis. The four attitude constraint regions are visually depicted in gray color. The trajectories of the telescope’s pointing direction (TPD) and the antenna’s pointing direction (APD), controlled by AMAC-AFTC, are represented by red and green lines respectively during maneuvering. The starting attitude is denoted by a circle, while the termination attitude is indicated by a box.",
//               number: "3",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title: "Schematicdksakd;l of the AMAC-AFTC.",
//               number: "4",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title:
//                 "Simulationasdsdda results of initial attitude satisfying constraints. In Fig. 3(f) 2D pointing direction trajectory, azimuth is represented on the horizontal axis and pitching angle on the vertical axis. The four attitude constraint regions are visually depicted in gray color. The trajectories of the telescope’s pointing direction (TPD) and the antenna’s pointing direction (APD), controlled by AMAC-AFTC, are represented by red and green lines respectively during maneuvering. The starting attitude is denoted by a circle, while the termination attitude is indicated by a box.",
//               number: "5",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title: "Schematical of the AMAC-AFTC.",
//               number: "6",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title:
//                 "Simulation results of initial attitude satisfying constraints. In Fig. 3(f) 2D pointinfasdfasdg direction trajectory, azimuth is represented on the horizontal axis and pitching angle on the vertical axis. The four attitude constraint regions are visually depicted in gray color. The trajectories of the telescope’s pointing direction (TPD) and the antenna’s pointing direction (APD), controlled by AMAC-AFTC, are represented by red and green lines respectively during maneuvering. The starting attitude is denoted by a circle, while the termination attitude is indicated by a box.",
//               number: "7",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title: "Schematicum of the AMAC-AFTC.",
//               number: "8",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title:
//                 "Simulations resultsss of initial attitude satisfying constraints. In Fig. 3(f) 2D pointing direction trajectory, azimuth is represented on the horizontal axis and pitching angle on the vertical axis. The four attitude constraint regions are visually depicted in gray color. The trajectories of the telescope’s pointing direction (TPD) and the antenna’s pointing direction (APD), controlled by AMAC-AFTC, are represented by red and green lines respectively during maneuvering. The starting attitude is denoted by a circle, while the termination attitude is indicated by a box.",
//               number: "9",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title: "Schematic of the AMAC-AFTC.",
//               number: "10",
//             },
//             {
//               type: "text",
//               content: "Waaaay another context. \\eqref{eq:solve}",
//             },
//             {
//               type: "figure",
//               image: "/images/test/articles/1.jpg",
//               title:
//                 "Simulationinh results of initial attitude satisfying constraints. In Fig. 3(f) 2D pointing direction trajectory, azimuth is represented on the horizontal axis and pitching angle on the vertical axis. The four attitude constraint regions are visually depicted in gray color. The trajectories of the telescope’s pointing direction (TPD) and the antenna’s pointing direction (APD), controlled by AMAC-AFTC, are represented by red and green lines respectively during maneuvering. The starting attitude is denoted by a circle, while the termination attitude is indicated by a box.",
//               number: "11",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       type: "section",
//       title: "Conclusion",
//       content: [
//         {
//           type: "text",
//           content:
//             "In this paper, we address the problem of spacecraft attitude redirection under mixed attitude constraints with arbitrary initial attitudes and finite sequential actuator faults. Firstly, utilizing the SO(3) framework to express the attitude and error function, we describe the mathematical constraint sets for both forbidden and mandatory attitude regions. Subsequently, a potential function with adaptable switching characteristics is constructed to reorient the spacecraft while satisfying these constraints. Additionally, a hysteresis switching function is incorporated to smoothen the switching process and reduce control chattering. Furthermore, an adaptive actuator fault direct compensation matrix is designed to mitigate challenges posed by finite sequences of actuator faults. By coupling a logarithmic potential function with a backstepping controller, an adaptive fault-tolerant controller for arbitrary initial mixed attitude constraints is proposed in order to ensure stability and effectiveness in dealing with the aforementioned constraints and faults. Simulation results validate the applicability of this proposed controller in spacecraft attitude redirection tasks under mixed attitude constraints with arbitrary initial attitudes as well as finite sequential actuator faults. Moving forward, our future research endeavors will be dedicated to developing attitude control techniques capable of adapting to parameter uncertainties within systems that encompass flexible components. Additionally, priority will be given to underactuated systems particularly susceptible to complete actuator faults aiming at augmenting resilience and dependability of spacecraft control systems in adverse conditions.",
//         },
//       ],
//     },
//     {
//       data: {
//         rows: [
//           {
//             cells: [
//               {
//                 data: "Constrained region",
//                 style: {
//                   bold: true,
//                 },
//               },
//               {
//                 data: "Direction vector, $x\\in R^3$",
//                 style: {
//                   bold: true,
//                 },
//               },
//               {
//                 data: "Angle",
//                 style: {
//                   bold: true,
//                 },
//               },
//             ],
//           },
//           {
//             cells: [
//               {
//                 data: "AFCR 1",
//                 style: {
//                   bold: true,
//                 },
//               },
//               {
//                 data: "[0, −1, 0]",
//               },
//               {
//                 data: "35°",
//               },
//             ],
//           },
//           {
//             cells: [
//               {
//                 data: "AFCR 2",
//                 style: {
//                   bold: true,
//                 },
//               },
//               {
//                 data: "[0.6835, 0.6735, 0.2815]",
//               },
//               {
//                 data: "$25^o$",
//               },
//             ],
//           },
//           {
//             cells: [
//               {
//                 data: "AFCR 3",
//                 style: {
//                   bold: true,
//                 },
//               },
//               {
//                 data: "[0.3800, 0, 0.9250]",
//               },
//               {
//                 data: "$20^o$",
//               },
//             ],
//           },
//           {
//             cells: [
//               {
//                 data: "AMCR 1",
//                 style: {
//                   bold: true,
//                 },
//               },
//               {
//                 data: "[−0.8138,0.5485,−0.1922]",
//               },
//               {
//                 data: "$20^o$",
//               },
//             ],
//           },
//         ],
//       },
//       type: "table",
//       title: "New table.",
//       number: "3",
//     },
//   ],
//   authors: [
//     {
//       id: "f4c59a20-58ce-43f2-83a5-2451663674c6",
//       first_name: "Yury",
//       last_name: "Razoumny",
//       middle_name: "Nikolayevich",
//       email: "raaazoumny_yun@rudn.ru",
//       scopus_id: "adsaddsaads",
//       orcid_id: "asdsadasdasds",
//       affiliations: [
//         {
//           id: "e0753a05-cd0e-4d2b-853b-d0fa91e6d794",
//           name: "RUDN University",
//           address: "Mikluho-Maklaya st. 6",
//           country: "Russian Federation",
//           postal_code: "122530",
//           aliases: [],
//           clarifications: [
//             {
//               id: 1,
//               faculty: "Academy of Engineering",
//               department: "Department of Mechanics",
//             },
//           ],
//         },
//         {
//           id: "f74d8def-cc81-409a-aa97-3f81728d0203",
//           name: "MSU",
//           address: "Komsomolskaya st, 2",
//           country: "Russian Federation",
//           postal_code: "122222",
//           aliases: [],
//           clarifications: [
//             {
//               id: 2,
//               faculty: "Academy of Mastering in Space Technics",
//               department: "Department of Space Mechanics",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "52019c2d-7fde-47c9-aa47-f09e4b9d31f2",
//       first_name: "Shin",
//       last_name: "Zhun",
//       middle_name: "Zhanen",
//       email: "shin-zhun-zhanen@pekin.china",
//       scopus_id: "test",
//       orcid_id: "test",
//       affiliations: [
//         {
//           id: "bb447a6d-9df6-44d0-bd89-4ab0c51272ae",
//           name: "PSTU",
//           address: "Shingua st, 22a",
//           country: "China",
//           postal_code: null,
//           aliases: [],
//           clarifications: [
//             {
//               id: 3,
//               faculty: "Academy of Something",
//               department: "Department of Lack of Imagination",
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   volume: {
//     id: "scitech2023",
//     conference_full_name:
//       "4th BRICS/Africa SciTech Forum on Space Flight Mechanics and Space Structures and Materials\n",
//     volume_number: "1",
//     title: "4th BRICS/Africa SciTech Forum",
//     published_at: "2025-11-30T00:00:00",
//   },
// };
