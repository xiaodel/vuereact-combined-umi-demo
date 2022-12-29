import styles from './index.less';
import VueComponent from '../vue/chart.vue'
import { applyVueInReact } from 'vuereact-combined'
const VueComponentInReact = applyVueInReact(VueComponent)

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <VueComponentInReact></VueComponentInReact>
    </div>
  );
}
