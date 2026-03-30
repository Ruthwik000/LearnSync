// Mathematics Course - Springboard Style Structure
export const mathCourse = {
  id: 'math-mastery-101',
  name: 'Mathematics - Complete Course',
  description: 'Master algebra, geometry, trigonometry and calculus fundamentals',
  subject: 'Mathematics',
  level: 'mastery',
  duration: '65 hours',
  thumbnail: '📐',
  color: '#f59e0b',
  totalLessons: 5,

  lessons: [
    {
      id: 'math-lesson-1', title: 'Number Systems', duration: '10 hours', order: 1,
      description: 'Explore real numbers, rational, irrational and their properties',
      topics: [
        {
          id: 'math-1-1', title: 'Real Numbers and Their Properties', duration: '50 min', xpReward: 100,
          content: `Real numbers include all rational and irrational numbers.\n\nRational Numbers: Can be expressed as p/q where q ≠ 0. Examples: ½, -3, 0.75, 0.333...\nIrrational Numbers: Cannot be expressed as p/q. Examples: √2, π, e\n\nEuclid's Division Lemma: a = bq + r (0 ≤ r < b)\nFundamental Theorem of Arithmetic: Every composite number can be expressed uniquely as a product of primes.`,
          keyPoints: ['Natural ⊂ Whole ⊂ Integer ⊂ Rational ⊂ Real', 'Irrational numbers have non-terminating, non-repeating decimals', 'Every real number has a unique point on the number line', 'HCF × LCM = Product of two numbers', 'Euclid\'s algorithm finds HCF efficiently'],
          examples: ['√2 = 1.41421356... (irrational)', 'π = 3.14159265... (irrational)', '0.333... = 1/3 (rational, repeating)'],
          subtopics: [
            { id: 'math-1-1-s1', title: 'Euclid\'s Division Algorithm', content: 'To find HCF of two numbers: Divide larger by smaller, then divide divisor by remainder, repeat until remainder is 0. Last divisor = HCF.' },
            { id: 'math-1-1-s2', title: 'Proof of Irrationality', content: 'To prove √2 is irrational: assume √2 = p/q (simplified), then 2q² = p², so p is even. Let p = 2k, then q is also even — contradicts that p/q is simplified.' }
          ],
          summary: 'Real numbers form a complete number system on the number line. Understanding rational vs irrational is fundamental to higher mathematics.',
          quiz: [
            { id: 'q1', question: 'Which is irrational?', options: ['0.5', '1/3', '√3', '-7'], correct: 2, explanation: '√3 cannot be expressed as p/q, making it irrational.' },
            { id: 'q2', question: 'HCF of 12 and 18 is:', options: ['6', '36', '3', '12'], correct: 0, explanation: '12 = 2²×3, 18 = 2×3². HCF = 2×3 = 6.' },
            { id: 'q3', question: 'Every rational number is:', options: ['An integer', 'A whole number', 'A real number', 'Irrational'], correct: 2, explanation: 'Rational numbers are a subset of real numbers.' }
          ]
        }
      ]
    },
    {
      id: 'math-lesson-2', title: 'Algebra', duration: '16 hours', order: 2,
      description: 'Master polynomials, linear equations, and quadratic equations',
      topics: [
        {
          id: 'math-2-1', title: 'Polynomials', duration: '55 min', xpReward: 110,
          content: `A polynomial is an expression of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀\n\nDegree determines type:\n• Linear (degree 1): ax + b\n• Quadratic (degree 2): ax² + bx + c\n• Cubic (degree 3): ax³ + bx² + cx + d\n\nZeroes of a polynomial p(x) are values where p(x) = 0.\n\nFor quadratic ax² + bx + c:\n• Sum of zeroes = -b/a\n• Product of zeroes = c/a`,
          keyPoints: ['Degree = highest power of variable', 'Number of zeroes ≤ degree of polynomial', 'Remainder theorem: p(a) = remainder when p(x) ÷ (x-a)', 'Factor theorem: (x-a) is factor if p(a)=0', 'Relationship between zeroes and coefficients'],
          examples: ['x² - 5x + 6 has zeroes x=2,3 (sum=5, product=6)', 'x³ - 6x² + 11x - 6 = (x-1)(x-2)(x-3)', '2x + 3 = 0 gives zero x = -3/2'],
          subtopics: [
            { id: 'math-2-1-s1', title: 'Division Algorithm for Polynomials', content: 'p(x) = g(x)×q(x) + r(x), where degree of r(x) < degree of g(x). Used to find factors and simplify expressions.' },
            { id: 'math-2-1-s2', title: 'Graphical Representation', content: 'Linear: straight line. Quadratic: parabola (opens up if a>0, down if a<0). Zeroes are x-intercepts of the graph.' }
          ],
          summary: 'Polynomials are fundamental algebraic expressions. Their zeroes relate directly to their coefficients through elegant formulas.',
          quiz: [
            { id: 'q1', question: 'Degree of 3x⁴ + 2x - 7 is:', options: ['3', '4', '2', '7'], correct: 1, explanation: 'Degree is the highest power of x, which is 4.' },
            { id: 'q2', question: 'Sum of zeroes of x² - 7x + 12 is:', options: ['12', '-7', '7', '-12'], correct: 2, explanation: 'Sum of zeroes = -b/a = -(-7)/1 = 7.' }
          ]
        },
        {
          id: 'math-2-2', title: 'Quadratic Equations', duration: '60 min', xpReward: 130,
          content: `A quadratic equation: ax² + bx + c = 0 (a ≠ 0)\n\nMethods of solving:\n1. Factorization: Split middle term\n2. Completing the square\n3. Quadratic Formula: x = (-b ± √(b²-4ac)) / 2a\n\nDiscriminant D = b² - 4ac:\n• D > 0: Two distinct real roots\n• D = 0: Two equal real roots\n• D < 0: No real roots (complex roots)`,
          keyPoints: ['Standard form: ax² + bx + c = 0', 'Quadratic formula gives both roots', 'Discriminant determines nature of roots', 'Sum of roots = -b/a, Product = c/a', 'Every quadratic has at most 2 real roots'],
          examples: ['x² - 5x + 6 = 0 → (x-2)(x-3) = 0 → x = 2, 3', 'x² + 4x + 4 = 0 → D = 0 → x = -2 (repeated)', 'x² + 1 = 0 → D = -4 → No real roots'],
          subtopics: [
            { id: 'math-2-2-s1', title: 'Factorization Method', content: 'Find two numbers whose sum = b and product = ac. Split middle term using these numbers, then factor by grouping.' },
            { id: 'math-2-2-s2', title: 'Word Problems', content: 'Translate real-world situations into quadratic equations. Common scenarios: area problems, speed-distance, consecutive numbers, profit/loss.' }
          ],
          summary: 'Quadratic equations are solvable by factoring, completing the square, or the quadratic formula. The discriminant reveals the nature of solutions.',
          quiz: [
            { id: 'q1', question: 'Roots of x² - 4 = 0 are:', options: ['±2', '±4', '4, 0', '2, 0'], correct: 0, explanation: 'x² = 4, so x = ±2.' },
            { id: 'q2', question: 'If D < 0, the equation has:', options: ['Two real roots', 'One root', 'No real roots', 'Infinite roots'], correct: 2, explanation: 'Negative discriminant means no real roots exist.' },
            { id: 'q3', question: 'Discriminant of 2x² + 3x + 1 = 0:', options: ['1', '9', '17', '-1'], correct: 0, explanation: 'D = b²-4ac = 9-8 = 1' }
          ]
        }
      ]
    },
    {
      id: 'math-lesson-3', title: 'Geometry', duration: '14 hours', order: 3,
      description: 'Study triangles, circles, and coordinate geometry',
      topics: [
        {
          id: 'math-3-1', title: 'Triangles and Similarity', duration: '55 min', xpReward: 120,
          content: `Two triangles are similar if their corresponding angles are equal and sides are proportional.\n\nCriteria for Similarity:\n• AA (Angle-Angle): Two angles equal\n• SSS (Side-Side-Side): All sides proportional\n• SAS (Side-Angle-Side): Two sides proportional with included angle equal\n\nBasic Proportionality Theorem (BPT): A line parallel to one side of a triangle divides the other two sides proportionally.\n\nPythagoras Theorem: In a right triangle, hypotenuse² = base² + perpendicular²`,
          keyPoints: ['Similar triangles have equal angles and proportional sides', 'AA criterion is sufficient to prove similarity', 'BPT: parallel line divides sides proportionally', 'Pythagoras: a² + b² = c² for right triangles', 'Converse of Pythagoras can prove right angle'],
          examples: ['A 3-4-5 triangle is right-angled (9+16=25)', 'Shadows create similar triangles with objects', 'Map scaling uses triangle similarity'],
          subtopics: [
            { id: 'math-3-1-s1', title: 'Pythagoras Theorem Applications', content: 'Finding ladder height against wall, diagonal of rectangle, distance between points. Pythagorean triples: (3,4,5), (5,12,13), (8,15,17).' },
            { id: 'math-3-1-s2', title: 'Area Ratio of Similar Triangles', content: 'Ratio of areas of similar triangles = square of ratio of corresponding sides. If sides are in ratio k, areas are in ratio k².' }
          ],
          summary: 'Triangle similarity and Pythagoras theorem are cornerstone geometry concepts with wide real-world applications.',
          quiz: [
            { id: 'q1', question: 'In a right triangle with legs 6 and 8, hypotenuse is:', options: ['14', '10', '48', '7'], correct: 1, explanation: '√(36+64) = √100 = 10' },
            { id: 'q2', question: 'AA stands for:', options: ['Area-Angle', 'Angle-Angle', 'Arc-Arc', 'Axis-Angle'], correct: 1, explanation: 'AA = Angle-Angle criterion for similarity.' }
          ]
        },
        {
          id: 'math-3-2', title: 'Coordinate Geometry', duration: '50 min', xpReward: 110,
          content: `Coordinate geometry connects algebra with geometry using the coordinate plane.\n\nDistance Formula: d = √[(x₂-x₁)² + (y₂-y₁)²]\nSection Formula: Point dividing (x₁,y₁) and (x₂,y₂) in ratio m:n = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))\nMidpoint: ((x₁+x₂)/2, (y₁+y₂)/2)\nArea of Triangle: ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|`,
          keyPoints: ['Distance formula from Pythagoras theorem', 'Section formula divides line segment in given ratio', 'Midpoint is special case of section formula (m:n = 1:1)', 'Collinear points have zero triangle area', 'Slope = (y₂-y₁)/(x₂-x₁)'],
          examples: ['Distance between (1,2) and (4,6) = √(9+16) = 5', 'Midpoint of (2,3) and (8,7) = (5,5)', 'Area of triangle with vertices at origin, (4,0), (0,3) = 6'],
          subtopics: [
            { id: 'math-3-2-s1', title: 'Equation of a Line', content: 'Slope-intercept: y = mx + c. Point-slope: y - y₁ = m(x - x₁). Two-point form. Parallel lines have equal slopes. Perpendicular lines: m₁ × m₂ = -1.' }
          ],
          summary: 'Coordinate geometry provides algebraic tools to solve geometric problems using formulas for distance, section, and area.',
          quiz: [
            { id: 'q1', question: 'Distance between (0,0) and (3,4) is:', options: ['7', '5', '12', '1'], correct: 1, explanation: '√(9+16) = √25 = 5' },
            { id: 'q2', question: 'Midpoint of (2,4) and (6,8) is:', options: ['(3,5)', '(4,6)', '(8,12)', '(2,2)'], correct: 1, explanation: 'Midpoint = ((2+6)/2, (4+8)/2) = (4,6)' }
          ]
        }
      ]
    },
    {
      id: 'math-lesson-4', title: 'Trigonometry', duration: '12 hours', order: 4,
      description: 'Master trigonometric ratios, identities and applications',
      topics: [
        {
          id: 'math-4-1', title: 'Trigonometric Ratios', duration: '55 min', xpReward: 120,
          content: `In a right triangle:\n• sin θ = Opposite / Hypotenuse\n• cos θ = Adjacent / Hypotenuse\n• tan θ = Opposite / Adjacent\n• cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ\n\nStandard values:\n• sin 0° = 0, sin 30° = ½, sin 45° = 1/√2, sin 60° = √3/2, sin 90° = 1\n• cos values are reverse of sin`,
          keyPoints: ['SOH-CAH-TOA mnemonic for ratios', 'sin²θ + cos²θ = 1 (fundamental identity)', '1 + tan²θ = sec²θ', '1 + cot²θ = cosec²θ', 'Complementary angles: sin(90-θ) = cosθ'],
          examples: ['Height of tower using angle of elevation', 'sin 30° = ½ means opposite = half of hypotenuse', 'tan 45° = 1 means opposite = adjacent'],
          subtopics: [
            { id: 'math-4-1-s1', title: 'Trigonometric Identities', content: 'sin²θ + cos²θ = 1. Used to simplify expressions and prove equations. All other identities can be derived from this.' },
            { id: 'math-4-1-s2', title: 'Heights and Distances', content: 'Angle of elevation: looking up. Angle of depression: looking down. Use tan for height problems, sin/cos for distance problems.' }
          ],
          summary: 'Trigonometric ratios relate angles to side lengths in right triangles. They are essential tools for measuring heights, distances, and angles.',
          quiz: [
            { id: 'q1', question: 'sin 30° =', options: ['1', '0', '½', '√3/2'], correct: 2, explanation: 'sin 30° = ½ is a standard value.' },
            { id: 'q2', question: 'tan 45° =', options: ['0', '1', '√2', '½'], correct: 1, explanation: 'tan 45° = sin 45°/cos 45° = 1.' },
            { id: 'q3', question: 'sin²θ + cos²θ =', options: ['0', '1', '2', 'tanθ'], correct: 1, explanation: 'This is the fundamental trigonometric identity.' }
          ]
        }
      ]
    },
    {
      id: 'math-lesson-5', title: 'Statistics and Probability', duration: '10 hours', order: 5,
      description: 'Learn data analysis, mean, median, mode and probability',
      topics: [
        {
          id: 'math-5-1', title: 'Statistics: Mean, Median, Mode', duration: '50 min', xpReward: 110,
          content: `Measures of Central Tendency:\n\nMean (Average): Sum of observations / Number of observations\nMedian: Middle value when data is arranged in order\nMode: Most frequently occurring value\n\nFor grouped data:\n• Mean: Direct, Assumed Mean, or Step Deviation method\n• Median: l + [(n/2 - cf)/f] × h\n• Mode: l + [(f₁-f₀)/(2f₁-f₀-f₂)] × h`,
          keyPoints: ['Mean is affected by extreme values', 'Median divides data into two equal halves', 'Mode is the most frequent value', 'For symmetric distribution: Mean = Median = Mode', 'Empirical: Mode = 3Median - 2Mean'],
          examples: ['Mean of 2,4,6,8,10 = 30/5 = 6', 'Median of 3,5,7,9,11 = 7 (middle value)', 'Mode of 2,3,3,4,5,5,5 = 5 (most frequent)'],
          subtopics: [
            { id: 'math-5-1-s1', title: 'Cumulative Frequency', content: 'Ogive (cumulative frequency curve) helps find median graphically. Less-than and more-than ogives intersect at median.' }
          ],
          summary: 'Statistics provides tools to summarize and analyze data. Mean, median, and mode each describe the "center" of data differently.',
          quiz: [
            { id: 'q1', question: 'Mean of 10, 20, 30, 40, 50 is:', options: ['25', '30', '35', '50'], correct: 1, explanation: 'Mean = (10+20+30+40+50)/5 = 150/5 = 30' },
            { id: 'q2', question: 'Mode of 1,2,2,3,3,3,4 is:', options: ['1', '2', '3', '4'], correct: 2, explanation: '3 appears most frequently (3 times).' }
          ]
        },
        {
          id: 'math-5-2', title: 'Probability', duration: '45 min', xpReward: 100,
          content: `Probability measures the likelihood of an event occurring.\n\nP(E) = Number of favorable outcomes / Total number of outcomes\n\nP(E) ranges from 0 (impossible) to 1 (certain)\nP(E) + P(not E) = 1\n\nFor a fair die: P(any face) = 1/6\nFor a fair coin: P(head) = P(tail) = 1/2`,
          keyPoints: ['0 ≤ P(E) ≤ 1', 'P(sure event) = 1, P(impossible event) = 0', 'P(E) + P(E\') = 1', 'Equally likely outcomes in fair experiments', 'Sample space = set of all possible outcomes'],
          examples: ['Two dice thrown: P(sum=7) = 6/36 = 1/6', 'Drawing a red card from deck: P = 26/52 = 1/2', 'Getting head in coin toss: P = 1/2'],
          subtopics: [
            { id: 'math-5-2-s1', title: 'Playing Cards Probability', content: '52 cards: 4 suits (Hearts♥, Diamonds♦, Clubs♣, Spades♠), each with 13 cards (A,2-10,J,Q,K). Face cards: J,Q,K = 12 total.' }
          ],
          summary: 'Probability quantifies uncertainty. Understanding sample spaces and favorable outcomes allows us to calculate the likelihood of events.',
          quiz: [
            { id: 'q1', question: 'Probability of getting head in a coin toss:', options: ['0', '1', '1/2', '1/4'], correct: 2, explanation: 'Fair coin has 2 outcomes, 1 favorable: P = 1/2' },
            { id: 'q2', question: 'P(E) + P(not E) =', options: ['0', '1', '2', 'P(E)'], correct: 1, explanation: 'Complementary events always sum to 1.' }
          ]
        }
      ]
    }
  ]
};

export default mathCourse;
