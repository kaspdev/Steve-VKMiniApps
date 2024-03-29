import React from "react";
import getArgs from "vkappsutils/dist/Args";
import VKBridge from "@vkontakte/vk-bridge";
import { useRouter } from "@unexp/router";
import { Panel, Group, CardGrid, Card, SimpleCell, Avatar, Button, ViewWidth, RichCell, useAdaptivity } from "@vkontakte/vkui";
import { Icon28SmileOutline, Icon24Gallery, Icon28StatisticsOutline, Icon32Graffiti, Icon28AddOutline, Icon24Globe, Icon28GraphOutline } from "@vkontakte/icons";

import { CustomPanelHeader } from "../../components/CustomPanelHeader";
import { IconServer, IconCalculator, IconSteve } from "../../icons/icons";

export function Home({ id }) {

    const { viewWidth } = useAdaptivity();
    const { push } = useRouter();
    const { user_id } = getArgs();

    return (
        <Panel id={id}>
            <CustomPanelHeader status="Minecraft помощник"
                               left={false}
            />
            <Group>
                <Group mode="plain">
                <CardGrid style={{ marginBottom: "12px", marginTop: viewWidth > ViewWidth.MOBILE ? "8px" : "0" }}
                          size="l"
                >
                    <Card>
                        <SimpleCell before={
                            <Icon28SmileOutline/>
                        }
                                    onClick={() => push({ panel: "user" })}
                                    size="m"
                                    multiline
                                    description="История никнейма и скин игрока"
                        >
                            Информация об игроке
                        </SimpleCell>
                    </Card>
                    <Card>
                        <SimpleCell before={
                            <IconServer/>
                        }
                                    onClick={() => push({ panel: "server" })}
                                    size="m"
                                    multiline
                                    description="Количество и список игроков, версия сервера и другая полезная информация"
                        >
                            Информация о сервере по IP
                        </SimpleCell>
                    </Card>
                    <Card>
                        <SimpleCell before={
                            <Icon24Gallery height={28} width={28}/>
                        }
                                    onClick={() => push({ panel: "gallery" })}
                                    size="m"
                                    multiline
                                    description="Скины для Minecraft на любой вкус и цвет"
                        >
                            Галерея скинов
                        </SimpleCell>
                    </Card>
                    <Card>
                        <SimpleCell before={
                            <Icon28StatisticsOutline/>
                        }
                                    onClick={() => push({ panel: "hypixel" })}
                                    size="m"
                                    multiline
                                    description="Подробная статистика по всем режимам сервера"
                        >
                            Статистика Hypixel
                        </SimpleCell>
                    </Card>
                    <Card>
                        <SimpleCell before={
                            <Icon24Globe height={28} width={28}/>
                        }
                                    onClick={() => push({ panel: "servers" })}
                                    size="m"
                                    multiline
                                    description="Список случайных серверов Minecraft"
                        >
                            Сервера Minecraft
                        </SimpleCell>
                    </Card>
                    <Card>
                        <SimpleCell before={
                            <Icon32Graffiti height={28} width={28}/>
                        }
                                    onClick={() => push({ panel: "generator" })}
                                    size="m"
                                    multiline
                                    description="Создайте достижение с вашим текстом и случайной иконкой"
                        >
                            Генератор достижений
                        </SimpleCell>
                    </Card>
                    <Card>
                        <SimpleCell before={
                            <IconCalculator/>
                        }
                                    onClick={() => push({ panel: "calculator" })}
                                    size="m"
                                    multiline
                                    description="Быстрый подсчёт координат в разных измерениях"
                        >
                            Калькулятор координат
                        </SimpleCell>
                    </Card>
                    <Card>
                        <RichCell multiline
                                  disabled
                                  before={
                                      <Avatar mode="image"
                                              id="steve-head"
                                              size={64}
                                      >
                                          <IconSteve height={64} width={64}/>
                                      </Avatar>
                                  }
                                  size="l"
                                  text="Получите быстрый доступ ко всем функциям в сообщениях ВК!"
                                  actions={
                                      <Button mode="secondary"
                                              target="_blank"
                                              href="https://vk.com/public175914098"
                                              rel="noreferrer"
                                      >
                                          Открыть
                                      </Button>
                                  }
                        >
                            Steve - Minecraft Бот
                        </RichCell>
                    </Card>
                    <Card>
                        <SimpleCell before={
                            <Icon28GraphOutline/>
                        }
                                    onClick={() => push({ panel: "status" })}
                                    size="m"
                                    multiline
                                    description="Информация о доступности всех серверов Minecraft"
                        >
                            Состояние сервисов
                        </SimpleCell>
                    </Card>
                    {
                        user_id && VKBridge.supports("VKWebAppAddToCommunity") &&
                        <Card>
                            <SimpleCell before={
                                <Icon28AddOutline/>
                            }
                                        onClick={() => VKBridge.send("VKWebAppAddToCommunity", {})}
                                        size="m"
                                        multiline
                                        description="Установите приложение в свое сообщество за один клик"

                            >
                                Установить приложение
                            </SimpleCell>
                        </Card>
                    }
                </CardGrid>
                </Group>
            </Group>
        </Panel>
    )
}
