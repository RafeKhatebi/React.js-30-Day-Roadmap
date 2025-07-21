
## Day 5: State with useState

## State Basics & update values

**State** lets a component "remember" information and update on user actions or data changes. In modern React, state in function components is handled by the `useState` hook.

**Syntax:**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper text-textMainDark selection:text-super selection:bg-super/10 bg-offset my-md relative flex flex-col rounded font-mono text-sm font-thin"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl sticky top-0 flex h-0 items-start justify-end"><button data-testid="copy-code-button" type="button" class="focus-visible:bg-offsetPlus dark:focus-visible:bg-offsetPlusDark hover:bg-offsetPlus text-textOff  hover:text-textMain dark:hover:bg-offsetPlusDark dark:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out font-sans  select-none items-center relative group/button  justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square"><div class="flex items-center min-w-0 font-medium gap-1.5 justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7999999999999998" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy "><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path></svg></div></div></button></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-text-200 bg-background-300 py-xs px-sm inline-block rounded-br rounded-tl-[3px] font-thin">jsx</div></div><div class="pr-lg"><span><code><span><span class="token token">import</span><span></span><span class="token token punctuation">{</span><span> useState </span><span class="token token punctuation">}</span><span></span><span class="token token">from</span><span></span><span class="token token">'react'</span><span class="token token punctuation">;</span><span>
</span></span><span>
</span><span><span></span><span class="token token">const</span><span></span><span class="token token punctuation">[</span><span>value</span><span class="token token punctuation">,</span><span> setValue</span><span class="token token punctuation">]</span><span></span><span class="token token operator">=</span><span></span><span class="token token">useState</span><span class="token token punctuation">(</span><span>initialValue</span><span class="token token punctuation">)</span><span class="token token punctuation">;</span><span>
</span></span><span></span></code></span></div></div></div></pre>

* `value`: Current state value.
* `setValue`: Function to update `value`.
* `initialValue`: Value used for initialization (e.g., `0`, `''`, etc.).
