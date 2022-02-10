import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { QiitaClient } from 'apis/QiitaClient';
import { Qiita, QiitaResponse } from 'types/qiitaTypes';

export const useListQiitaArticles = () => {
  const [articles, setArticles] = useState<Array<Qiita>>([]);
  const [searchWord, setSearchWord] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchArticles = async (
    e: FormEvent<HTMLFormElement>,
    formText: string,
    setFormText: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault(); // フォームのデフォルトの動作（リロード）を防ぐ
    setIsLoading(true); // ローディング開始
    setErrorMessage(''); // エラーメッセージを初期化

    // await を付与することでこの処理が終わらない限り次の処理に進まないようになる（これがないとローディング処理などが先に呼ばれてしまう）
    await QiitaClient.get<Array<QiitaResponse>>('/items', {
      params: {
        query: formText, // フォーム入力を検索ワードとして設定
        per_page: 25, // 25件 の記事を取得するように設定
      },
    })
      .then((response) => {
        // レスポンスから利用したい要素を Qiita 型 の配列でセット
        setArticles(
          response.data.map<Qiita>((d) => {
            return {
              id: d.id,
              title: d.title,
              likes_count: d.likes_count,
              user: d.user,
            };
          })
        );

        // 検索キーワードをレスポンスから取得してセット
        setSearchWord(response.config.params.query);
      })
      .catch((error) => {
        // エラーメッセージをセット
        setErrorMessage(error.message);
      });

    setIsLoading(false); // ローディング終了
    setFormText(''); // 最終的にフォーム入力を空にする
  };

  return {
    articles,
    searchWord,
    errorMessage,
    isLoading,
    fetchArticles,
  };
};
