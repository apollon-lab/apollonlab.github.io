/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.svg';
import Editing from 'assets/key-feature/editing.svg';
import Speed from 'assets/key-feature/speed.svg';

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: 'Decouvert',
    title: "Créons une vision commune",
    text:
      'Ensemble, travaillons à établir une série de principes, un manifesto que vous utiliserez pour promouvoir l’expérience utilisateur au sein de votre entreprise.',
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: 'Monitoring',
    title: "Explorons l'empathie",
    text:
      'Explorer les synthèse visuelle des propos, pensées, actions et ressentis d’un utilisateur, ou segment d’utilisateurs d’un produit',
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: 'Quality',
    title: 'Idéation rapide',
    text:
      '5 minutes pour consolider un écran qui se nourrit des idées tirées du brainstorming ',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Revolutionner l'expérience utilisateurs"
          title="Pointer une rapidité de l'intérêt d'une démarche centrée utilisateur"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
