import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, C as noop, J as destroy_each, u as set_data } from "../../chunks/index-9aa484bb.js";
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let tr;
  let td0;
  let t0_value = (
    /*field*/
    ctx[2].created_at.substr(8, 2) + "/" + /*field*/
    ctx[2].created_at.substr(5, 2) + "-" + /*field*/
    ctx[2].created_at.substr(0, 4)
  );
  let t0;
  let t1;
  let td1;
  let t2_value = (
    /*field*/
    ctx[2].created_at.substr(11, 8) + ""
  );
  let t2;
  let t3;
  let td2;
  let t4_value = (
    /*field*/
    ctx[2].field1 + ""
  );
  let t4;
  let t5;
  return {
    c() {
      tr = element("tr");
      td0 = element("td");
      t0 = text(t0_value);
      t1 = space();
      td1 = element("td");
      t2 = text(t2_value);
      t3 = space();
      td2 = element("td");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", {});
      var tr_nodes = children(tr);
      td0 = claim_element(tr_nodes, "TD", { class: true });
      var td0_nodes = children(td0);
      t0 = claim_text(td0_nodes, t0_value);
      td0_nodes.forEach(detach);
      t1 = claim_space(tr_nodes);
      td1 = claim_element(tr_nodes, "TD", { class: true });
      var td1_nodes = children(td1);
      t2 = claim_text(td1_nodes, t2_value);
      td1_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      td2 = claim_element(tr_nodes, "TD", { class: true });
      var td2_nodes = children(td2);
      t4 = claim_text(td2_nodes, t4_value);
      td2_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(td0, "class", "svelte-1gzll7w");
      attr(td1, "class", "svelte-1gzll7w");
      attr(td2, "class", "svelte-1gzll7w");
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      append_hydration(tr, td0);
      append_hydration(td0, t0);
      append_hydration(tr, t1);
      append_hydration(tr, td1);
      append_hydration(td1, t2);
      append_hydration(tr, t3);
      append_hydration(tr, td2);
      append_hydration(td2, t4);
      append_hydration(tr, t5);
    },
    p(ctx2, dirty) {
      if (dirty & /*feeds*/
      1 && t0_value !== (t0_value = /*field*/
      ctx2[2].created_at.substr(8, 2) + "/" + /*field*/
      ctx2[2].created_at.substr(5, 2) + "-" + /*field*/
      ctx2[2].created_at.substr(0, 4)))
        set_data(t0, t0_value);
      if (dirty & /*feeds*/
      1 && t2_value !== (t2_value = /*field*/
      ctx2[2].created_at.substr(11, 8) + ""))
        set_data(t2, t2_value);
      if (dirty & /*feeds*/
      1 && t4_value !== (t4_value = /*field*/
      ctx2[2].field1 + ""))
        set_data(t4, t4_value);
    },
    d(detaching) {
      if (detaching)
        detach(tr);
    }
  };
}
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let table;
  let tr;
  let th0;
  let t2;
  let t3;
  let th1;
  let t4;
  let t5;
  let th2;
  let t6;
  let t7;
  let each_value = (
    /*feeds*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      h1 = element("h1");
      t0 = text("Oversikt over måledata");
      t1 = space();
      table = element("table");
      tr = element("tr");
      th0 = element("th");
      t2 = text("Måledato:");
      t3 = space();
      th1 = element("th");
      t4 = text("klokkeslett:");
      t5 = space();
      th2 = element("th");
      t6 = text("rom nummer:");
      t7 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Oversikt over måledata");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      table = claim_element(nodes, "TABLE", { class: true });
      var table_nodes = children(table);
      tr = claim_element(table_nodes, "TR", {});
      var tr_nodes = children(tr);
      th0 = claim_element(tr_nodes, "TH", { class: true });
      var th0_nodes = children(th0);
      t2 = claim_text(th0_nodes, "Måledato:");
      th0_nodes.forEach(detach);
      t3 = claim_space(tr_nodes);
      th1 = claim_element(tr_nodes, "TH", { class: true });
      var th1_nodes = children(th1);
      t4 = claim_text(th1_nodes, "klokkeslett:");
      th1_nodes.forEach(detach);
      t5 = claim_space(tr_nodes);
      th2 = claim_element(tr_nodes, "TH", { class: true });
      var th2_nodes = children(th2);
      t6 = claim_text(th2_nodes, "rom nummer:");
      th2_nodes.forEach(detach);
      tr_nodes.forEach(detach);
      t7 = claim_space(table_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(table_nodes);
      }
      table_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-1gzll7w");
      attr(th0, "class", "svelte-1gzll7w");
      attr(th1, "class", "svelte-1gzll7w");
      attr(th2, "class", "svelte-1gzll7w");
      attr(table, "class", "svelte-1gzll7w");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, table, anchor);
      append_hydration(table, tr);
      append_hydration(tr, th0);
      append_hydration(th0, t2);
      append_hydration(tr, t3);
      append_hydration(tr, th1);
      append_hydration(th1, t4);
      append_hydration(tr, t5);
      append_hydration(tr, th2);
      append_hydration(th2, t6);
      append_hydration(table, t7);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(table, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*feeds*/
      1) {
        each_value = /*feeds*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(table, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(table);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let feeds = [];
  const hentData = async () => {
    const data = await fetch("https://api.thingspeak.com/channels/2022245/feeds.json");
    const json = await data.json();
    $$invalidate(0, feeds = json.feeds);
  };
  hentData();
  return [feeds];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
